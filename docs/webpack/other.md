# other
## 模式
```
开发环境
module.exports = {
  mode: 'development'
}
会将process.env.NODE_ENV的值设为development  
启用NamedChunksPlugin和NamedModulesPlugin  
```
```
产品环境
module.exports = {
  mode: 'production'
}
会将process.env.NODE_ENV的值设为 production  
启用FlagDependencyUsagePlugin,FlagIncludedChunksPlugin,ModuleConcatenationPlugin,  
NoEmitOnErrorsPlugin,OccurrenceOrderPlugin,SideEffectsFlagPlugin和UglifyJsPlugin.
```

webpack --mode=production  在cli里面传递选项参数也可以

## 占位符
```
[ext]: 文件的扩展名
[name]: 文件的名字
[path]: 资源相对webpack.config.js的路径
[folder]: 资源的目录
[hash]: 资源的hash值
```

## 开发环境
devtool: 'cheap-module-eval-source-map'  // 开发环境 
devtool: 'cheap-module-source-map'  // 生产环境

webpack --watch  // 监听文件的变化,自动打包

devServer: {
  contentBase: './dist',  // 服务器的文件在哪
  open: true,  // 自动打开浏览器并访问
  port: 9000,  // 设置服务器的端口号,默认8080
  proxy: {
    '/api': 'http://localhost:3000'
  },
  hot: true,  // 开启热替换,以下两个配置需要配合插件
  hotOnly: true  // 即使更新没有成功,浏览器也不更新
}

## 配置文件的组成
一般在项目中,分为开发环境和生产环境  
可以配置一个公共的配置文件,一个生产环境的配置文件,一个开发环境的配置文件  
在其他两个配置文件中通过标识来判断当前环境,然后引入对应的配置文件,再打包  
