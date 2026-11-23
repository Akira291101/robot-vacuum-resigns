import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const line = "My robot vacuum handed in its notice — said it was done being pushed around and wanted a career with more drive.";
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
