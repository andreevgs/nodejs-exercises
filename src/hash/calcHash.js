import {createHash} from 'crypto';
import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256')
        .update(readFileSync(`${__dirname}/files/fileToCalculateHashFor.txt`));
    console.log(hash.digest('hex'));
};

await calculateHash();