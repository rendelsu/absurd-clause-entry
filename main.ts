import fs from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = outDir + "/entry.txt";
fs.writeFileSync(outPath, "In no event shall the Company be liable for damages arising from acts of God, war, civil unrest, embargo, or a duck that knows your password.");
fs.chmodSync(outPath, 0o644);
