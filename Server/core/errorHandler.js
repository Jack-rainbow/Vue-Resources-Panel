const {
    logger
} = require('../logs')
module.exports = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        logger.error(error)
        if (error.code === 401) {
            ctx.status = 401
        }
        ctx.fail(error.status, error.message, error.code)
    }
}