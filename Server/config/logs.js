const path = require('path');
module.exports = {
    appenders: {
        access: { //配置客户端信息
            type: 'dateFile', // dateFile/console
            pattern: '-yyyy-MM-dd.log', //生成文件的规则
            filename: path.resolve('./logList/access/', 'access'), //生成文件名
            alwaysIncludePattern: true,
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            filename: path.resolve('./logList/application/', 'application'),
            alwaysIncludePattern: true,
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info'
        },
        access: {
            //配置客户端信息
            appenders: ['access'],
            level: 'info'
        },
        application: {
            appenders: ['application'],
            level: 'WARN'
        }
    }
}