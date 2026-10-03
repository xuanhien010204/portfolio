import sharp from "sharp";
import fs from "fs";
import path from "path";

async function optimize() {
  const images = [
    { file: "public/images/projects/asrp-dashboard.png", quality: 90 },
    { file: "public/images/projects/ai-automation.png", quality: 90 },
  ];

  for (const img of images) {
    const fullPath = path.resolve(img.file);
    const backupPath = fullPath + ".backup.png";
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
    }
    const originalSize = fs.statSync(fullPath).size;

    const buffer = await sharp(backupPath)
      .png({ compressionLevel: 9, palette: true, quality: img.quality })
      .toBuffer();

    fs.writeFileSync(fullPath, buffer);
    const newSize = fs.statSync(fullPath).size;
    console.log(`Optimized ${img.file}: ${(originalSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${((1 - newSize / originalSize) * 100).toFixed(1)}% saved)`);
  }
}

optimize().catch(console.error);
