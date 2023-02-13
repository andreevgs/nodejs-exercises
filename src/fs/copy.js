import {cp} from 'fs/promises';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        await cp(
            `${__dirname}/files`,
            `${__dirname}/files_copy`,
            {force: false, errorOnExist: true, recursive: true}
        );
    } catch (e) {
        throw Error('FS operation failed');
    }
};

await copy();
