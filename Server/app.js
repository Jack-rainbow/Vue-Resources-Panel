const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const cors = require('koa-cors')
const index = require('./routes/index')
const {
  accessLogger,
} = require('./logs/index')

// !  日志服务
app.use(accessLogger())

// error handler
onerror(app)
// ! 跨域服务
app.use(cors()) //使用cors--解决跨域
// middlewares

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(() => {
  console.log('服务器已启动，访问 http://localhost:3000')
})

module.exports = app
