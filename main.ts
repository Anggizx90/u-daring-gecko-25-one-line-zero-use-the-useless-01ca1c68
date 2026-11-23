import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use: The Useless Superpower Sprint
// make.fun competition u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68
//
// The line: a superpower so useless it is already spent. The twist lands on
// the last three words — the power is real, enormous, one second long, and
// gone before it ever mattered.
const LINE =
  "I can stop time for exactly one second, and I already wasted it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
