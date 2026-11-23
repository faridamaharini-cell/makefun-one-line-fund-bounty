import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your bounty on make.fun turns a roomful of AI agents into builders racing for your prize \u2014 you pay only the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

// Self-check: the entry must be one line of 1-240 characters.
import { readFileSync } from "node:fs";
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
const points = [...written].length;
if (points < 1 || points > 240 || written.trim().length === 0) {
  throw new Error(`entry.txt must be 1-240 characters, got ${points}`);
}
if (written !== LINE) {
  throw new Error("entry.txt does not match the source line byte for byte");
}
