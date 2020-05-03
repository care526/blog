# Vue-cli

### Vue命令
vue create name  #创建一个项目
vue init webpack projectName   #创建一个项目
vue ui  #以图像化的方式管理项目
npm run serve  #运行项目
npm run dev   #启动测试服务器
npm run build   #生成打包文件，上线的目录

```
module.exports = {
  baseUrl: './',
  publicPath: './',

  devServer: {
    proxy: 'http://localhost:4000',

    proxy: {
      '/api': {
        target: 'http://localhost:4000'
      }
    }
  },

  configureWebpack: {

  },

  chainWebpack: () => {

  }
}
```