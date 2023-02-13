import {rm} from 'fs/promises';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    try {
        await rm(`${__dirname}/files/fileToRemove.txt`);
    } catch (e) {
        throw Error('FS operation failed');
    }
};

await remove();