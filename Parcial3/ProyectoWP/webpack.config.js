console.log(module);
console.log(__dirname);
console.log(__filname);

const path = require('path');

module.exports = {
    entry : '.src/index.js',
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production"
}