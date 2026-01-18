import fs from 'fs';
import 'dotenv/config';

const template = fs.readFileSync('.clasp.json.template', 'utf8');
const scriptId = process.env.GAS_SCRIPT_ID;

if (!scriptId) {
  console.error('Error: GAS_SCRIPT_ID is not defined in .env');
  process.exit(1);
}

const config = template.replace('{GAS_SCRIPT_ID}', scriptId);
fs.writeFileSync('.clasp.json', config);

console.log(`.clasp.json has been generated with scriptId: ${scriptId}`);
