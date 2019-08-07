import requireDirectory from 'require-directory';
import Router from 'koa-router';

class InitManager {
    static initCore(app) {
        //把app.js中的koa实例传进来
        InitManager.app = app;
        InitManager.initLoadRouters();
    }
    static initLoadRouters() {
        //注意这里的路径是依赖于当前文件所在位置的
        //最好写成绝对路径 ${process.cwd()}
        const apiDirectory = `../controllers`
        const modules = requireDirectory(module, apiDirectory, {
            visit: whenLoadModule //visit将添加到module.exports的每个模块调用的选项
        });
        
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes(), obj.allowedMethods())
            }
            // 接口不存在时丢404
            obj.all('*', async (ctx, next) => {
                ctx.body = {
                    code: 404,
                    msg: '接口不存在'
                }
                ctx.status = 404
            })
        }
    }
}
module.exports = InitManager;