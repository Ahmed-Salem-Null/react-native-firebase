/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Converts mock text files into a js file that karma can read without
 * using fs.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { join } = require('path');

const mockResponseDir = join(__dirname, 'vertexai-sdk-test-data/mock-responses');

async function main(): Promise<void> {
  const list = fs.readdirSync(mockResponseDir);
  const lookup: Record<string, string> = {};
  // eslint-disable-next-line guard-for-in
  for (const fileName of list) {
    const fullText = fs.readFileSync(join(mockResponseDir, fileName), 'utf-8');
    lookup[fileName] = fullText;
  }
  let fileText = `// Generated from mocks text files.`;

  fileText += '\n\n';
  fileText += `export const mocksLookup: Record<string, string> = ${JSON.stringify(
    lookup,
    null,
    2,
  )}`;
  fileText += ';\n';
  fs.writeFileSync(join(__dirname, 'mocks-lookup.ts'), fileText, 'utf-8');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
