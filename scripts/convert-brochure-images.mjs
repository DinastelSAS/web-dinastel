import sharp from "sharp";
import { readdir, readFile, unlink, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "assets", "brochure");

// old filename -> new slug (without extension); everything converts to .webp
const renameMap = {
  "MOVILIDAD (3).JPG": "movilidad-03",
  "MOVILIDAD (7).jpg": "movilidad-04",
  "MTTO-PLANTAS (2).JPG": "mantenimiento-plantas-01",
  "ALMACENAMIETNO.ENERGIA (2).jpg": "almacenamiento-energia-01",
};

async function unlinkWithRetry(file, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      await unlink(file);
      return;
    } catch (err) {
      if (err.code !== "EBUSY" || i === attempts - 1) throw err;
      await new Promise((r) => setTimeout(r, 200));
    }
  }
}

for (const [oldName, slug] of Object.entries(renameMap)) {
  const src = path.join(dir, oldName);
  const dest = path.join(dir, `${slug}.webp`);
  const buf = await readFile(src);
  const out = await sharp(buf).webp({ quality: 82 }).toBuffer();
  await unlinkWithRetry(src);
  await sharp(out).toFile(dest);
  console.log(`${oldName} -> ${slug}.webp`);
}

console.log("\nRemaining files in brochure dir:");
console.log((await readdir(dir)).sort().join("\n"));
