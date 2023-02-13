const parseArgs = () => {
    let resultStr = '';
    process.argv.forEach((arg, index) => {
        if (arg.substring(0, 2) === '--' && process.argv[index + 1]) {
            if (resultStr) resultStr += ', ';
            resultStr += `${arg.slice(2)} is ${process.argv[index + 1]}`;
        }
    });
    console.log(resultStr);
};

parseArgs();