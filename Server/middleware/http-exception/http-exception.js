const SUCEESS_CODE = 0; //成功code
const FAILURE_CORE = 1; //失败code

module.exports = async (ctx, next) => {
    ctx.success = (status = 200, msg = '成功', code = SUCEESS_CODE) => {
        ctx.response.status = status;
        ctx.body = {
            code,
            msg,
            data: true
        }
    }
    ctx.fail = (status = 500, msg, code = FAILURE_CORE) => {
        ctx.response.status = status;
        ctx.body = {
            code,
            msg,
            data: false
        }
    }
    await next()
}