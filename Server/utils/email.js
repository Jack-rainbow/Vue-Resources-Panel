import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import {
    emailConfig,
    jwt
}
from '../config';

let transport = nodemailer.createTransport(emailConfig)

const sendEmail = async (email, subject, html) => {
    try {
        return await transport.sendMail({
            from: `"【你的小宝贝】"<${emailConfig.email}>`,
            to: email,
            subject,
            html
        })
    } catch (error) {
        console.log('发邮件异常')
        console.log(error)
    }
}

const createToken = data => {
    return jwt.sign({
            exp: Date.now() + jwt.exp * 1000,
            data
        },
        jwt.secret
    )
}

const parserToken = token => {
    return jwt.verify(token, jwt.secret)
}

const geneateVerifyCode = len => {
    const origin =
        '01234567890abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWSYZ'
    let result = ''
    for (let i = 0; i < len; i++) {
        result += origin[Math.floor(Math.random() * origin.length)]
    }
    return result
}

module.exports = {
    createToken,
    parserToken,
    sendEmail,
    geneateVerifyCode
}