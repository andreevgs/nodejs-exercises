import {createUnzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {promisify} from 'util';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipe = promisify(pipeline);

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(`${__dirname}/files/compressed.txt.gz`);
    const destination = createWriteStream(`${__dirname}/files/uncompressed.txt`);
    await pipe(source, unzip, destination);
};

await decompress();