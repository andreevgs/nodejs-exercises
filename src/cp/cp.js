import {promisify} from 'util';
import {spawn} from 'child_process';
import {fileURLToPath} from 'url';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnPromisified = promisify(spawn);

const spawnChildProcess = async (args) => {
    await spawnPromisified('node', ['files/script.js', ...args], {cwd: __dirname, stdio: 'inherit'});
};

spawnChildProcess(process.argv);
