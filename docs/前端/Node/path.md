# path

## 引用模块
`const path = require('path');`

## 提供对于Windows的path方法的实现
path.win32

## 提供对于POSIX的path方法的实现
path.posix

## 平台的路径定界符(linux下是 ：)
path.delimiter  // ：

## 平台的路径片段分隔符(linux下是/)
path.sep   // /

## path.basename(path) 返回路径的最后一部分
```
path.basename('/foo/bar/baz/asdf/index.html');  // index.html
path.basename('/foo/bar/baz/asdf/index.html', '.html');  //index  
```

##  path.dirname(path) 返回路径的目录(出最后一部分的其他)
```
path.dirname('/foo/bar/baz/asdf/quux');  // '/foo/bar/baz/asdf'
```

## path.extname(path) 返回路径的扩展名
从最后一个 . 到最后。如果没有 . 返回空字符串，如果只有一个点但是在第一个，也返回‘’
```
path.extname('index.html');  // ‘.html’
path.extname('.html');  // ‘’
path.extname('index');  // ‘’
```
## path.isAbsolute(path) 检测是否是绝对路径

## path.join([...paths]) 将传入的若干个数据拼接为标准的路径(绝对路径/相对路径)
```
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');  // '/foo/bar/baz/asdf'
```

## path.normalize(path) 将一个路径标准化
```
path.normalize('/foo/bar//baz/asdf/quux/..');  // '/foo/bar/baz/asdf'
```

## path.relative(from, to) 根据from路径到to路径的相对路径
```
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');  // '../../impl/bbb'
```
## path.resolve([...paths]) 将传入的若干个路径解析为绝对路径
```
path.resolve('/foo/bar', './baz');  // '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/');  // '/tmp/file'
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

## path.format(pathObject) 将输入的对象属性转化为路径字符串
如果提供了 pathObject.dir，则忽略 pathObject.root  
如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name  
```
path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});  // '/home/user/dir/file.txt'


path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
});  // '/file.txt'

// 如果未指定 `base`，则使用 `name` + `ext`。
path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
});  // '/file.txt'
```