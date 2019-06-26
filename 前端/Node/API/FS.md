## 引用模块
`const fs = require('fs')`

## 新建空目录
```
fs.mkdir(path[, option], err => {});
```

## 删除文件
```
fs.unlink(path, err => {});
```

## 向文件追加数据
```
fs.appendFile(path, data, err => {});
```

## 拷贝文件
```
fs.copyFile(path, path, err => {}); //前一个是源文件path，后一个是目标文path
```

## 读取文件
```
fs.readFile(path, (err, data) => {});
```

## 重命名
```
fs.rename(oldPath, newPath, err => {});
```

## 将数据写到文件中
如果没有文件就新建。如果有文件，就覆盖文件内容
```
fs.writeFile(path, data, 'utf8', err => {});
```

## 删除空目录
```
fs.rmdir(path, err => {});
```

## 读取目录
将文件中的目录和文件，以字符串数组输出
```
fs.readdir(path, (err, files) => {});
```