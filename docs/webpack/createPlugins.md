# 插件编写

## 组成
1. 一个 JavaScript 命名函数
2. 在插件函数的 prototype 上定义一个 apply 方法。
3. 指定一个绑定到 webpack 自身的事件钩子。
4. 处理 webpack 内部实例的特定数据。
5. 功能完成后调用 webpack 提供的回调。

## 代码
```js
// 一个 JavaScript 命名函数。
function MyExampleWebpackPlugin() {

};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
MyExampleWebpackPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('webpacksEventHook', function(compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
    console.log("This is an example plugin!!!");

    // 功能完成后调用 webpack 提供的回调。
    callback();
  });
};
```

## compiler钩子
- entryOption
  在 entry 配置项处理过之后，执行插件
- afterPlugins
  设置完初始插件之后，执行插件
- afterResolvers
  resolver 安装完成之后，执行插件
- environment
  environment 准备好之后，执行插件
- afterEnvironment
  environment 安装完成之后，执行插件
- beforeRun
  compiler.run() 执行之前，添加一个钩子
- run
  开始读取 records 之前，钩入(hook into) compiler
- watchRun
  监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前
- normalModuleFactory
  NormalModuleFactory 创建之后，执行插件
- contextModuleFactory
  ContextModuleFactory 创建之后，执行插件
- beforeCompile
  编译(compilation)参数创建之后，执行插件
- compile
  一个新的编译(compilation)创建之后，钩入(hook into) compiler
- thisCompilation
  触发 compilation 事件之前执行
- compilation
  编译(compilation)创建之后，执行插件
- make
- afterCompile
- shouldEmit
- needAdditionalPass
- emit
  生成资源到 output 目录之前
- afterEmit
  生成资源到 output 目录之后
- done
  编译(compilation)完成
- failed
  编译(compilation)失败
- invalid
  监听模式下，编译无效时
- watchClose
  监听模式停止