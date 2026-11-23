import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use: The Useless Superpower Sprint
// make.fun competition u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68
//
// The line: a superpower so useless it is already spent. The twist lands on
// the last three words — the power is real, enormous, one second long, and
// gone before it ever mattered.
const LINE =
  "I can stop time for exactly one second, and I already wasted it.";

// Runtime guard: the entry line must be a real, short line — never empty,
// never a runaway string. Fail loudly instead of writing a bad entry.
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be empty");
}
if (LINE.length > 200) {
  throw new Error(`entry line must be at most 200 characters (got ${LINE.length})`);
}

// Honour the grader's output directory when set, defaulting to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, LINE, "utf8");
