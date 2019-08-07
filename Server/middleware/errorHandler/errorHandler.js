module.exports = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        ctx.log.error(error)
        if (error.code === 401) {
            ctx.status = 401
        }
        ctx.fail(error.status, error.message, error.code)
    }
}