## koa2-cli

### 安装
- yarn global koa-generator

- yarn

* 使用signale插件进行美化动日志


### 目录结构


### 接口规范
- [阮一峰resetful规范](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)


| 描述 | 接口  | 方法 | url 参数 | 备注 |
| ---------- | ----------- | ------- | ------ | -------- | 
| id | | Y | Y   | Y   |


[⬆ Back to Top](#目录结构)

### 跨域解决方案

- 插件： 
   - [koa-cors](https://www.npmjs.com/package/koa-cors)
- koa-seesion
   - [koa-seesion理解](https://github.com/iNuanfeng/blog/issues/1)

[⬆ Back to Top](#目录结构)

### 路由自动注入

[路由注入](https://juejin.im/post/5d255d05518825424d656e11)
- 插件：require-directory
- 日志配置文件：
   - routes/index.js

[⬆ Back to Top](#目录结构)
### 日志插件

- 插件：log4js
- 日志配置文件：
   - config/log.js
- 日志使用
   - 1.根据设置的env文件打出日志
      - 1.1 env为dev/local/development控制台输出日志
      - 1.2 其他配置文件输出日志
      - 1.3 输出目录自动配置

[⬆ Back to Top](#目录结构)

### orm中间件(建模)

* Schema是一种以文件形式存储的数据库模型骨架
#### 插件
   sequelize
####  Schema中的数据类型
- String ：字符串类型
- Number ：数字类型
- Date ： 日期类型
- Boolean： 布尔类型
- Buffer ： NodeJS buffer 类型
- ObjectID ： 主键,一种特殊而且非常重要的类型
- Mixed ：混合类型
- Array ：集合类型

[⬆ Back to Top](#目录结构)

### redis

[⬆ Back to Top](#目录结构)

### 异常处理
- 日志配置文件：
   - core/error/customError.js
- 日志使用
   - 当有异常请求的时候自动输出日志
[参考链接](http://neoyeelf.github.io/2018/04/29/koa%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%A4%84%E7%90%86%E5%BC%82%E5%B8%B8/)
[⬆ Back to Top](#目录结构)

### 登录处理

[⬆ Back to Top](#目录结构)

### 搭建开发环境
- nodemon 检测文件变化，自动重启 node
- cross-env 兼容 mac linux 和 windows 的环境变量
- node使用import
``` js
require('babel-register')
({
    plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
})
module.exports = require('./app.js')// 入口文件
```

### 目录别名

- 采用`module-alias`包
- 参考链接[模块包](https://www.npmjs.com/package/module-alias)


### 参数校验

- 采用`koa-parameter`包
- 同理joi也可以，更完美，但是koa-parameter更完美，更符合我的业务需求
  



[⬆ Back to Top](#目录结构)