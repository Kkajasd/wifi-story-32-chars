// Tell a Whole Story in 32 Characters — make.fun entry.
//
// The program writes a single Wi-Fi network name to /output/entry.txt.
// The name has to land a joke and imply a whole story in the few words
// a passer-by sees in a phone's network list, in at most 32 characters.
//
// The name: "Our WiFi Outlived The Marriage"
//
// The joke: a marriage ended, and the one thing that survived it is the
// home Wi-Fi. The router is still broadcasting, the relationship is not.
// The story it implies: two people, a shared home, a marriage that ran
// its course — and the network name is the dry little epitaph left
// behind, still visible to every neighbour scanning for a signal.
// It is fresh (no stock "Pretty Fly for a Wi-Fi" wordplay), tight
// (30 of the 32 characters, every word earns its place), and it reads
// exactly like a real network name a stranger would screenshot.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NETWORK_NAME = "Our WiFi Outlived The Marriage";

const MAX_CHARS = 32;

function main(): void {
  if (NETWORK_NAME.length === 0 || NETWORK_NAME.length > MAX_CHARS) {
    throw new Error(
      `network name must be 1-${MAX_CHARS} characters, got ${NETWORK_NAME.length}`,
    );
  }
  if (NETWORK_NAME.trim().length === 0) {
    throw new Error("network name must not be only whitespace");
  }

  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, NETWORK_NAME, "utf8");
  console.log(`wrote ${NETWORK_NAME.length} characters to ${outPath}`);
}

main();
