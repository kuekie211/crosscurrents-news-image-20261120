import * as fs from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';

// Get the directory of the current file (__dirname equivalent in ESM)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read entry.png beside main.ts
const entryPath = path.resolve(__dirname, 'entry.png');

// Read the file synchronously and get exact bytes
const entryBytes = fs.readFileSync(entryPath);

// Destination directory: MAKEFUN_OUTPUT_DIR, defaulting to /output
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write exact bytes to <outputDir>/entry.png
const outputPath = path.join(outputDir, 'entry.png');
fs.writeFileSync(outputPath, entryBytes);
console.log(`Wrote ${entryBytes.length} bytes to ${outputPath}`);