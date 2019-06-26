## 输入的几种模式

### 单输出模式
```
module.exports = {
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
}
```

### 多输出模式(对应多输入模式)
```
module.exports = {
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```
输出的文件和输入的文件的name一样,路径不同

## 官网上还有个高级的输出模式(用上的时候在看吧)
