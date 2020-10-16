# output
## 输入的几种模式

### 单输出模式
```
module.exports = {
  output: {
    publicPath: 'www.cdn.com',  // 打包出的文件指定上传的cdn的地址
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
}
```

### 多输出模式(对应多输入模式)
```
module.exports = {
  output: {
    filename: '[name].js',  // 设置输出文件名
    path: __dirname + '/dist'  // 指定输出目录
  }
}
```
输出的文件和输入的文件的name一样,路径不同

## 官网上还有个高级的输出模式(用上的时候在看吧)
