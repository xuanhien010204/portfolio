import { chromium } from "playwright";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = "C:/Users/XUAN HIEN/.gemini/antigravity/brain/ba14c433-0b81-4936-a2d5-be5407ba5e08/screenshots/before";

async function scrollPage(page) {
  // Smoothly scroll down to bottom and then back up to ensure all whileInView observers are triggered
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  await page.waitForTimeout(1000);
}

async function run() {
  const browser = await chromium.launch({ channel: "msedge", headless: true }).catch(() => chromium.launch({ headless: true }));

  console.log("Auditing 1440px Desktop with scrolling...");
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await scrollPage(page);

    await page.screenshot({ path: path.join(OUTPUT_DIR, "desktop-1440-full-scrolled.png"), fullPage: true });

    const sections = ["#home", "#work", "#credentials", "#expertise", "#journey", "#about", "#github", "#contact"];
    for (const sec of sections) {
      const el = await page.$(sec);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await el.screenshot({ path: path.join(OUTPUT_DIR, `desktop-1440-${sec.replace('#', '')}.png`) });
      }
    }
    await context.close();
  }

  console.log("Auditing 768px Tablet with scrolling...");
  {
    const context = await browser.newContext({ viewport: { width: 768, height: 1024 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await scrollPage(page);

    await page.screenshot({ path: path.join(OUTPUT_DIR, "tablet-768-full-scrolled.png"), fullPage: true });
    await context.close();
  }

  console.log("Auditing 375px Mobile with scrolling...");
  {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await scrollPage(page);

    await page.screenshot({ path: path.join(OUTPUT_DIR, "mobile-375-full-scrolled.png"), fullPage: true });

    const sections = ["#home", "#work", "#credentials", "#expertise", "#journey", "#about", "#github", "#contact"];
    for (const sec of sections) {
      const el = await page.$(sec);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await el.screenshot({ path: path.join(OUTPUT_DIR, `mobile-375-${sec.replace('#', '')}.png`) });
      }
    }
    await context.close();
  }

  await browser.close();
  console.log("ALL SCROLLED SCREENSHOTS CAPTURED!");
}

run().catch((e) => {
  console.error("Failed:", e);
  process.exit(1);
});
