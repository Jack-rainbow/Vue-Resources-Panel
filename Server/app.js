const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const cors = require('koa-cors')
const index = require('./routes/index')
const accessLogger = require('./middleware/logs/index'); // 日志输出
const signale = require('./config/signale');  // shell输出美化


app.use(accessLogger()) // !  日志服务
  .use(cors()) // ! 跨域服务
  .use(bodyparser({ // ! middlewares
    enableTypes: ['json', 'form', 'text']
  }))
  .use(json())
  .use(index.routes(), index.allowedMethods()) // ! 接口路由

app.on('error', (err, ctx) => {
  // ! shell 启动失败
  signale.fatal('server error', err, ctx)
});
app.listen(() => {
  signale.success('服务启动完成，访问 http://localhost:3000')
})

module.exports = app
