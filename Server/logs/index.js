
const log4js = require('koa-log4');
const config = require('../config/logs')
log4js.configure(config);

exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access'));
exports.logger = log4js.getLogger('application');