import Koa from 'koa';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';
import cors from 'koa-cors';
import accessLogger from './middleware/logs'; // 日志输出
import errorHandler from './middleware/errorHandler'; // 日志输出
import signale from './config/signale'; // shell输出美化
import InitManager from './routes';
const app = new Koa()
app.use(accessLogger()) // !  日志服务
  .use(cors()) // ! 跨域服务
  .use(bodyparser({ // ! middlewares
    enableTypes: ['json', 'form', 'text']
  }))
  .use(errorHandler)
  .use(json())
InitManager.initCore(app); // ! 自动注入接口路由

app.on('error', (err, ctx) => {
  // ! shell 启动失败
  signale.fatal('server error', err, ctx)
});
app.listen(() => {
  signale.success('服务启动完成，访问 http://localhost:3000')
})

module.exports = app
