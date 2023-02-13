import {pipeline} from 'stream';
import {Transform} from 'stream';
import { promisify } from 'util';

const pipe = promisify(pipeline);

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, ((chunk.toString().split('')).reverse().join('')));
    },
});

const transform = async () => {
    await pipe(process.stdin, reverse, process.stdout);
};

await transform();