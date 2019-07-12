const Sequelize = require('sequelize');
const sequelize = new Sequelize('world', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false, //为操作符设置别名(sql表别名)
    dialectOptions: {
        //字符集
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

module.exports = {
    sequelize
};