node 和 webpack 的版本越新，打包的速度越快，会利用node中的新特性，提高打包速度

npx

npm init -y 直接应用默认配置
npm info webpack 查看库的信息

一切皆模块

npx webpack --config xxx.js  // 指定加载的配置文件

npm run // 运行包的时候会先在依赖库里面找，找不到再去全局库里面找

webpack index.js  加载默认的配置

占位符 在loader部分里面

loader的处理顺序 从下到上，从右向左
file-loader 将静态资源移动到指定的位置，并返回路径
url-loader 将指定大小的文件资源，打包为base64，更大的同file-loader
vue-loader 处理vue文件
style-loader 将样式代码添加到head标签
css-loader 分析css之间的引用，合并为一段css
sass-loader 编译scss样式文件
postcss-loader 添加厂商前缀
node-sass

html-webpack-plugin
clean-webpack-plugin


devtool socuse-map
指定代码的映射，用于找错误
建议使用 dev: cheap-module-eval-source-map
pro:cheap-module-source-map

devServe: 本地开发环境配置
webpack --watch 监听文件的变化，自动打包
hot: true
hotOnly: true
new webpack.HotModuleReplacementPlugin()
if (module.hot) {}  如vue-loader 已经设置好了hot的相关代码


webpack --env  在配置文件中可以拿到 env这个变量 默认为true
--env=abc
--env.pro

webpack-merge npm包

ES 和 commjs 引入文件的区别
webpack的按需加载只支持 es

pro模式下  该选项可以不写 也会生效
optimization: {
    usedExports: true
}
package.json 里面添加属性 sideEffects: ["@babel/polly-fill"]  忽略按需打包的文件
sideEffects: false 没有的话 设置false


分为上个配置文件，com pro dev


## 代码分割
将第三方库提取出来 变为单独的文件加载   并行加载文件,而且用户不需要再加载已经缓存的第三方库的文件
同步代码 只要配置下面的配置 就可以了
optimization: {
    splitChunks: 'all'
}
异步代码会自动打包到不同的文件

splitChunksPlugin
/* webpackChunkName: "xxx" */
optimization: {
    splitChunks: 'all | async',  // 所有和单独对异步代码
    cacheGroups: {
        vendors: false,
        default: false
    }
}
如果文件过大，也是可以分割的，不一定是公共代码

babel的官方动态引入插件 @babel/plugin-syntax-dynamic-import