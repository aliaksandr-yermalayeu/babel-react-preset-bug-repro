const assert = require('assert');
const path = require('path');
const fs = require('fs');

const transform = (filename) => {
    const babel = require('@babel/core');
    const options = babel.loadOptions({ cwd: __dirname, filename });
    const content = fs.readFileSync(filename, 'utf8');

    let plugins = options.plugins.map(({ key }) => (path.isAbsolute(key) ? path.relative(__dirname, key) : key));
    console.debug(plugins);

    return babel.transform(content, options);
};

const file = 'src/app.jsx';
const { code } = transform(file);

assert(code.includes('React.createElement') && !code.includes('<span'), `JSX is not really transpiled: \n ${code}`);
