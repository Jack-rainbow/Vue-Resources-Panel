

import Router from 'koa-router';
import UserInfoModel from '../modules/models/userInfo';
import {
    Success,
    HttpException
} from '../middleware/http-exception';

// 此处前缀有问题
const router = new Router(
//     {
//     prefix: '/api/vi'
// }
)

router.post('/userInfo/create', async ctx => {
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
})

router.post('/userInfo/:email', async ctx => {
    let {
        email,
        password
    } = ctx.request.body;
    if (!!email  && !!password) {
        try {
            const res = await UserInfoModel.getUserEmail(email);
            if (res) {
                await UserInfoModel.updatePass(email, password);
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
})

router.post('/login', async ctx => {
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
                    msg: '成功',
                    data: true
                }
            } else if (!verifyEmail) {
                throw new HttpException('邮箱未注册', 10001, 400)
            } else {
                throw new HttpException('登录失败', 10001, 400)
            }

        } catch (err) {
            ctx.log.info(err);
        }
    } else {
        ctx.response.status = 400;
        ctx.body = {
            code: 400,
            msg: '参数不齐全'
        }
    }
})
module.exports = router;
