// Alien Field Notes: The Two Day Earth Review
// A one-line review of planet Earth, written by an alien tourist.
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Came to Earth for the beaches. Stayed because the locals pay rent to live on their own planet, then weep at weddings. Four stars — the dogs are carrying this place.";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(destination, "entry.txt");
mkdirSync(destination, { recursive: true });
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${entryPath}`);
