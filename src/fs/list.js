import {readdir} from "fs/promises";
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
        const contentOfDir = await readdir(`${__dirname}/files`);
        console.log(contentOfDir);
    } catch (e) {
        throw Error('FS operation failed');
    }
};

await list();