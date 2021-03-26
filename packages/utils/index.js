const v = require('./package.json').version;
const test = () => console.log('utils test ' + v)
// fix stuff
exports.default = test;