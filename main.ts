// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry itself is the X post; this program hands the gate the post's address
// by copying POST.json from the repository root to /output/POST.json.
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
