import {cpus} from 'os';
import {Worker} from 'worker_threads';
import * as path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workersAsync = [];
    let number = 10;
    for(let i = 0; i < cpus().length; i++){
        workersAsync.push(
            new Promise((resolve, _) => {
                const worker = new Worker(`${__dirname}/worker.js`, {
                    workerData: {number},
                });
                worker.on('message', data => resolve({status: 'resolved', data }));
                worker.on('error', () => resolve({status: 'error', data: null }));
                worker.on('exit', (code) => {
                    if (code !== 0)
                        resolve({status: 'error', data: null });
                });
            })
        );
        number++;
    }
    const resultOfWorkers = await Promise.all(workersAsync);
    console.log(resultOfWorkers);
};

await performCalculations();