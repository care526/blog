# fs

## 引用模块
```js
const fs = require('fs')
```

## 新建空目录
```js
fs.mkdir(path[, option], err => {});
```

## 删除文件
```js
fs.unlink(path, err => {});
```

## 向文件追加数据
```js
fs.appendFile(path, data, err => {});
```

## 拷贝文件
```js
fs.copyFile(path, path, err => {}); //前一个是源文件path，后一个是目标文path
```

## 读取文件
- readFile
// 无论文件多大，都全部读取到内存
```js
// 异步读取
fs.readFile(path, (err, data) => {
  // data is buffer
  // data.toString() 拿到文件的字符串
});
```
```js
// 同步读取，阻塞代码执行
// 具体使用要用 try catch 处理错误
const data = fs.readFileSync(path);
```
- 通过创建可读流的方式读取文件内容
```js
const rs = fs.createReadStream(
  path, // string buffer url
  {
    highWaterMark: 1, // 最大流数据为1KB，默认为64KB
  }
)
rs.on('data', chunk => {}) // chunk 是buffer
rs.on('error', err => {})
rs.on('end', () => {})
```
> 基于流的解析器  
> jsonparse  
> JSONStream  
```js
const fs = require('fs');
const JSONStream = require('JSONStream');

(async () => {
  const readable = fs.createReadStream('./list.json', {
    encoding: 'utf8',
    highWaterMark: 1
  })
  const parser = JSONStream.parse('.');
  readable.pipe(parser);
  parser.on('data', console.log);
})()
```

## 重命名
```js
fs.rename(oldPath, newPath, err => {});
```

## 将数据写到文件中
如果没有文件就新建。如果有文件，就覆盖文件内容
```js
fs.writeFile(path, data, 'utf8', err => {});
```

## 删除空目录
```js
fs.rmdir(path, err => {});
```

## 读取目录
将文件中的目录和文件，以字符串数组输出
```js
fs.readdir(path, (err, files) => {});
```