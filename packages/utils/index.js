const v = require('./package.json').version;
const test = () => console.log('utils test ' + v)
// test
exports.default = test;