## 入口设置的几种模式

### 单入口模式
```
module.exports = {
  entry: './path/to/my/entry/file.js',


  entry: {
    // 如果没有output，main就是输出文件名
    main: './path/to/my/entry/file.js'
  }
}
```

### 多入口模式
```
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}
```