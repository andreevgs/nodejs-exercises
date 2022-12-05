const parseEnv = () => {
    let resultStr = '';
    Object.keys(process.env).forEach((envVar) => {
        if (envVar.substring(0, 4) === 'RSS_' && envVar.length > 4) {
            if (resultStr) resultStr += '; ';
            resultStr += `${envVar}=${process.env[envVar]}`;
        }
    });
    console.log(resultStr);
};

parseEnv();