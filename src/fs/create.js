import {writeFile} from "fs/promises";
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    try {
        await writeFile(__dirname + '/files/fresh.txt', 'I am fresh and young', {flag: 'wx'});
    } catch (e) {
        throw Error('FS operation failed');
    }
};

await create();