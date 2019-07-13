require('dotenv').config();
const env = process.env;
module.exports = {
    jwt: {
        secret: 'Chongchong',
        // 单位： 秒
        exp: 1
    },
    emailConfig: {
        service: 'qq',
        secureConnection: true, // 使用SSL
        port: 465, // SMTP 端口
        auth: {
            user: `${env.user}`, // qq账号
            pass: `${env.pass}` // smtp 授权码
        },
        email: `${env.to}`
    }
}