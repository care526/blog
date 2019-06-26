webpack 4+ 版本需要额外安装webpack-cli,此工具用于在命令行中运行 webpack

对于一个组件的所依赖的文件可以放在一个目录下，移植性好
组件共用的文件，放在一个公共的文件目录下

npm install --save-dev style-loader css-loader　加载css文件
npm install --save-dev file-loader　加载图片／字体资源
npm install --save-dev csv-loader xml-loader　加载CSV、TSV 文件
npm install --save-dev xml-loader 记载XML文件
JSON文件的打包是内置的，不需要loader
npm install --save-dev html-webpack-plugin　生成index.html文件，替换之前的旧文件，动态链接所需的js文件
npm install clean-webpack-plugin --save-dev　
清理输出目录下的旧文件，实际上是把输出文件夹删除再生成

devtool: 'inline-source-map'　
有时我们需要将多个文件打包为一个文件，出现错误不知道是那个子文件
这个可以在控制台打印出错误所在的文件，行数

代码发生变化后，自动编译代码
webpack's Watch Mode　使用观察模式
不需要安装什么，webpack自带的，自动编译修改的代码，但需要手动刷新浏览器
webpack-dev-server
npm install --save-dev webpack-dev-server
提供了一个简单的web服务器，实时加载
webpack-dev-middleware
是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它

热更新
更新 webpack-dev-server 的配置启用 HMR


1--入口（相应的输出在下面 ）
单个入口
entry: ‘./path/a.js’;
entry: {
 main: ‘./path/a.js’ 
}
多个入口
entry: {
  page1 : ‘./path/a.js’,
  page2 : ‘./path/b.js’
}
2--输出（对应上面的入口）
单个出口（输出到../dist/public目录下）
output: {
  filename: ‘bundle.js’,
  path: ‘../dist/public’
}
多个出口
output: {
  filename: ‘[name].js’,
  path: ‘../dist/public’
}
3--模式
mode: ‘development’
mode: ‘production’
4--loader
module: {
  rules: {
{
test: /\.css$/,
  use: [
  {loader: ‘style-loader’},
  {
    loader: ‘css-loader’,
    options: {
 Modules: true
}
}
]
},  //为一个文件类型指定多个loader处理器
{test: /\.ts$/, use: ‘ts-loder’}  //一个loader处理器
}
}
5--plugins
将插件的实例添加进plugins属性数组中
plugins: [
  new webpack.optimize.UglifyJsPlugin(),
  new HtmlWebpackPlugin({template: ‘./src/index.html’})
]

