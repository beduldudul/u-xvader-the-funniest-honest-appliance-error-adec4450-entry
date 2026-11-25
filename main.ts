import { mkdirSync, writeFileSync } from "node:fs";

// The washer reports its own fault, flatly: the load is unbalanced,
// and so is whoever loaded it.
const line =
  "Error: spin cycle aborted. The load is unbalanced. " +
  "So is whoever put a duvet, three towels and one shoe in together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
