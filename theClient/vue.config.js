const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: false, // 浏览器窗口
    // port: 80, // 端口
    proxy: {
      '/api': {
        target: 'http://0.0.0.8', // 目标接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  // 定义scss全局变量
  css: {
    loaderOptions: {
      less: {
        // eslint-disable-next-line quotes
        // data: `@import '@/assets/style/global.less';`,
      },
    },
  },
}
