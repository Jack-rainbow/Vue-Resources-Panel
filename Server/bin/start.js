require('babel-register')
require('babel-polyfill');
({
    plugins: [
        'babel-plugin-transform-es2015-modules-commonjs',
        'es2015'
    ],
})
module.exports = require('../app.js')