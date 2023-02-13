import {createReadStream} from "fs";
import {pipeline} from 'stream';
import { promisify } from 'util';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipe = promisify(pipeline);

const read = async () => {
    const source = createReadStream(`${__dirname}/files/fileToRead.txt`);
    await pipe(source, process.stdout);
};

await read();