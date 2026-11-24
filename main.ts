// Validated entry program for make.fun competition w37
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "I am out of the office dying of thirst while you water the plastic succulent on the bookshelf.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
