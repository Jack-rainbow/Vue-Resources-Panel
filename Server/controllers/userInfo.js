const UserInfoModel = require("../modules/userInfo");
const jwt = require('jsonwebtoken')

class articleController {
    /**
     * 注册用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        //接收客服端
        let req = ctx.request.body;
        if (!!req.email && !!req.password) {
            try {
                const email = await UserInfoModel.getUserEmail(req.email);
                if (email) {
                    ctx.response.status = 400;
                    ctx.body = {
                        code: 400,
                        msg: '邮箱存在',
                        data: null
                    }
                } else {
                    await UserInfoModel.register(req);
                    ctx.response.status = 200;
                    ctx.body = {
                        code: 200,
                        msg: '注册成功',
                        data: true
                    }
                }

                
            } catch (err) {
                ctx.response.status = 500;
                ctx.body = {
                    code: 500,
                    msg: '注册失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: '参数不齐全'
            }
        }
    }
    /**
     * @description: 更改密码
     */
    static async updateUserPass(ctx) {
        //接收客服端
        let {
            email,
            password
        } = ctx.request.body;
        if (!!email  && !!password) {
            try {
                const res = await UserInfoModel.getUserEmail(email);
                if (res) {
                    await UserInfoModel.updatePass(email, password);
                    const token = jwt.sign({
                        email,
                        password
                    },
                     'my_token',  // 密钥， 自己定义的
                     {
                        expiresIn: '2h' //token 的过期时间
                    })
                    ctx.response.status = 200;
                    ctx.body = {
                        code: 200,
                        msg: '密码修改成功',
                        data: true
                    }
                } else {
                    ctx.response.status = 400;
                    ctx.body = {
                        code: 400,
                        msg: '密码修改失败',
                        data: false
                    }
                }

            } catch (err) {
                ctx.response.status = 500;
                ctx.body = {
                    code: 500,
                    msg: '失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: '参数不齐全'
            }
        }
    }



    /**
     * @description: 登录
     */
    static async login(ctx) {
        //接收客服端
        let {
            email,
            password
        } = ctx.request.body;
        if (!!email && !!password) {
            try {
                const res = await UserInfoModel.usreLogin({
                    email,
                    password
                });
               const verifyEmail  = await UserInfoModel.getUserEmail(email);
                if (res) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: 200,
                        msg: '登录成功',
                        data: true
                    }
                } else if (!verifyEmail) {
                    ctx.response.status = 400;
                    ctx.body = {
                        code: 400,
                        msg: '邮箱未注册',
                        data: true
                    }
                } else {
                    ctx.response.status = 400;
                    ctx.body = {
                        code: 400,
                        msg: '登录失败',
                        data: false
                    }
                }

            } catch (err) {
                ctx.response.status = 500;
                ctx.body = {
                    code: 500,
                    msg: '失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: '参数不齐全'
            }
        }
    }
}

module.exports = articleController;