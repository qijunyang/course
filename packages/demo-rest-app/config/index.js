const process = require('process');
var def = require('./default');
var qa = require('./qa');
var stg = require('./stg');
var config;
const env = process.env.NODE_ENV;
console.log(env);
if (env === 'development') {
    config = Object.assign({}, def, qa);
} else if (env === 'stg') {
    config = Object.assign({}, def, stg);
} else {
    throw new Error(`not supported env ${env}`);
}
module.exports = config;