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