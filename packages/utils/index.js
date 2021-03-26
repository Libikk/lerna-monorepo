const v = require('./package.json').version;
const test = () => console.log('utils test ' + v)
//
exports.default = test;