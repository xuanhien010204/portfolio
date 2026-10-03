import { chromium } from "playwright";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = "C:/Users/XUAN HIEN/.gemini/antigravity/brain/ba14c433-0b81-4936-a2d5-be5407ba5e08/screenshots/after";

async function scrollThroughPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let current = 0;
      const step = 350;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        current += step;
        if (current >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 60);
    });
  });
  await page.waitForTimeout(600);
}

async function run() {
  const browser = await chromium.launch({ channel: "msedge", headless: true }).catch(() => chromium.launch({ headless: true }));
  const results = {
    consoleErrors: [],
    consoleWarnings: [],
    pageErrors: [],
    overflows: {},
    modalAccessibility: {},
    mobileMenuAccessibility: {},
    sectionsChecked: {},
  };

  const setupPage = async (viewport) => {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    page.on("console", (msg) => {
      if (msg.type() === "error") results.consoleErrors.push({ text: msg.text(), location: msg.location() });
      if (msg.type() === "warning") results.consoleWarnings.push({ text: msg.text(), location: msg.location() });
    });
    page.on("pageerror", (err) => results.pageErrors.push(err.message));
    return { context, page };
  };

  console.log("--- 1. VERIFYING 1440px DESKTOP ---");
  {
    const { context, page } = await setupPage({ width: 1440, height: 900 });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await scrollThroughPage(page);

    results.overflows["1440px"] = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth,
    }));

    await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-1440-full.png"), fullPage: true });

    // Section screenshots
    const sections = ["#home", "#work", "#credentials", "#expertise", "#journey", "#about", "#github", "#contact"];
    for (const sec of sections) {
      const el = await page.$(sec);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);
        await el.screenshot({ path: path.join(OUTPUT_DIR, `desktop-1440-${sec.replace('#', '')}.png`) });
      }
    }

    // Modal focus trap & restoration test
    console.log("Testing Credential Modal accessibility on 1440px...");
    const firstPreviewBtn = await page.$(".credential-card .credential-action-btn--primary");
    if (firstPreviewBtn) {
      await firstPreviewBtn.focus();
      const triggerLabel = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.tagName);
      await firstPreviewBtn.click();
      await page.waitForTimeout(400);

      await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-1440-credential-modal.png") });

      const activeWhenOpened = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.className);

      // Test Tab navigation inside modal
      await page.keyboard.press("Tab");
      const activeAfterFirstTab = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.innerText || document.activeElement?.className);

      // Test Escape key
      await page.keyboard.press("Escape");
      await page.waitForTimeout(300);

      const modalClosed = await page.$(".credential-modal") === null;
      const activeAfterClose = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.tagName);

      results.modalAccessibility = {
        opened: true,
        triggerLabel,
        activeWhenOpened,
        activeAfterFirstTab,
        closedWithEscape: modalClosed,
        activeAfterClose,
        restoredFocusToTrigger: activeAfterClose === triggerLabel,
      };
    }

    await context.close();
  }

  console.log("--- 2. VERIFYING 768px TABLET ---");
  {
    const { context, page } = await setupPage({ width: 768, height: 1024 });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await scrollThroughPage(page);

    results.overflows["768px"] = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth,
    }));

    await page.screenshot({ path: path.join(OUTPUT_DIR, "tablet-768-full.png"), fullPage: true });

    const heroEl = await page.$("#home");
    if (heroEl) await heroEl.screenshot({ path: path.join(OUTPUT_DIR, "tablet-768-hero.png") });

    const workEl = await page.$("#work");
    if (workEl) await workEl.screenshot({ path: path.join(OUTPUT_DIR, "tablet-768-work.png") });

    const credEl = await page.$("#credentials");
    if (credEl) await credEl.screenshot({ path: path.join(OUTPUT_DIR, "tablet-768-credentials.png") });

    await context.close();
  }

  console.log("--- 3. VERIFYING 375px MOBILE ---");
  {
    const { context, page } = await setupPage({ width: 375, height: 812 });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await scrollThroughPage(page);

    results.overflows["375px"] = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth,
    }));

    await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-full.png"), fullPage: true });

    const heroEl = await page.$("#home");
    if (heroEl) await heroEl.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-hero.png") });

    const workEl = await page.$("#work");
    if (workEl) await workEl.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-work.png") });

    const credEl = await page.$("#credentials");
    if (credEl) await credEl.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-credentials.png") });

    // Test mobile menu open and Escape
    console.log("Testing mobile menu open & escape...");
    const menuBtn = await page.$("button[aria-label='Toggle navigation']");
    if (menuBtn) {
      await menuBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-menu-open.png") });
      const menuIsOpen = await page.$("#mobile-menu") !== null;

      await page.keyboard.press("Escape");
      await page.waitForTimeout(300);
      const menuClosedWithEscape = await page.$("#mobile-menu") === null;

      results.mobileMenuAccessibility = {
        opened: menuIsOpen,
        closedWithEscape: menuClosedWithEscape,
      };
    }

    // Test modal on mobile
    const firstPreviewBtn = await page.$(".credential-card .credential-action-btn--primary");
    if (firstPreviewBtn) {
      await firstPreviewBtn.click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-credential-modal.png") });
      const closeBtn = await page.$(".modal-close-btn");
      if (closeBtn) await closeBtn.click();
      await page.waitForTimeout(300);
    }

    await context.close();
  }

  console.log("--- 4. VERIFYING CASE STUDY /projects/asrp ---");
  {
    const { context, page } = await setupPage({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/projects/asrp`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await scrollThroughPage(page);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "asrp-1440-full.png"), fullPage: true });
    await context.close();
  }

  {
    const { context, page } = await setupPage({ width: 375, height: 812 });
    await page.goto(`${BASE_URL}/projects/asrp`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await scrollThroughPage(page);
    await page.screenshot({ path: path.join(OUTPUT_DIR, "asrp-375-full.png"), fullPage: true });
    await context.close();
  }

  await browser.close();
  console.log("\nVERIFICATION COMPLETE!");
  console.log(JSON.stringify(results, null, 2));
}

run().catch((e) => {
  console.error("Verification failed:", e);
  process.exit(1);
});
