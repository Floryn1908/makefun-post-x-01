// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry itself is the X post; this program hands the gate the post's address
// by copying POST.json from the repository root to /output/POST.json.
// Before copying it checks the file really names an X status URL, so a broken
// POST.json fails here with a clear error instead of reaching the gate.
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const post = JSON.parse(readFileSync(join(botDir, 'POST.json'), 'utf8'));
if (typeof post.url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(post.url)) {
  throw new Error(`POST.json does not name an X status URL: ${JSON.stringify(post)}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
