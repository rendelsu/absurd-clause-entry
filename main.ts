import fs from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = outDir + "/entry.txt";
fs.writeFileSync(outPath, "The Company shall not be liable for any damages resulting from acts of God, war, civil unrest, or a duck that has learned your password.");
fs.chmodSync(outPath, 0o644);
