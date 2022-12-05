import {fileURLToPath} from 'url';
import * as path from "path";
import * as fs from 'fs/promises';
import {existsSync} from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const isFileExist = existsSync(path.join(__dirname, 'files', newFileName));
    try {
        if(!isFileExist){
            await fs.rename(
                `${__dirname}/files/${oldFileName}`,
                `${__dirname}/files/${newFileName}`
            );
        } else {
            throw Error();
        }
    } catch (e) {
        throw Error('FS operation failed');
    }
};

await rename();