import {createWriteStream} from "fs";
import {pipeline} from 'stream';
import {promisify} from 'util';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipe = promisify(pipeline);

const write = async () => {
    const destination = createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    await pipe(process.stdin, destination);
};

await write();