import {readFile} from "fs/promises";
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const fileContent = await readFile(
            `${__dirname}/files/fileToRead.txt`,
            {encoding: 'utf-8'}
        );
        console.log(fileContent);
    } catch (e) {
        throw Error('FS operation failed');
    }
};

await read();