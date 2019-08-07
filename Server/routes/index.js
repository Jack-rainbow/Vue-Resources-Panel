import Router from 'koa-router'
import ArtileController from '../controllers/article'
import userInfoController from '../controllers/userInfo'


const router = new Router({
  prefix: '/api/v1' //接口前缀
});

/**
 * 文章接口
 */
//创建文章
router.post('/article/create', ArtileController.create);
//获取文章详情
router.get('/article/:id', ArtileController.detail)

// ! 注册接口
router.post('/userInfo/create', userInfoController.create)
router.put('/userInfo/:email', userInfoController.updateUserPass)
router.post('/login', userInfoController.login)


// ! 如果匹配不到路由则返回404
router.all('*', async (ctx, next) => {
   ctx.body = {
     code: 404,
     msg: '接口不存在'
   }
   ctx.status = 404
})
module.exports = router

// const routesLoader = require('../utils/routesLoader');
// export default function (app) {
//   // app
//   // .use(login.routes())
//   routesLoader(`${__dirname}`).then((files) => {
//     files.forEach((route) => {
//       app
//         .use(route.routes())
//         .use(route.allowedMethods({
//           throw: true,
//         }))
//     })
//   })
// }