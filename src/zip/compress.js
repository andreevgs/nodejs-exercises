import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import { promisify } from 'util';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipe = promisify(pipeline);

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const destination = createWriteStream(`${__dirname}/files/compressed.txt.gz`);
    await pipe(source, gzip, destination);
};

await compress();