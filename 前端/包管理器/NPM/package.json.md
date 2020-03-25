json里面是不允许写注释的
```
{
  "name": "care"',

  "version": "1.0.0",

  "description": "包的描述信息",

  "keywords": "包的关键字，帮助人们找到这个包",

  "homepage":

  "bugs":

  "license": "BSD-3-Clause",  // 包的通用许可证

  "author": "Rubble",  // 包的作者
  "author": {
    "name": "Rubble",
    "email": "b@rubble.com",
    "url": "http://barnyrubble.tumblr.com"
  },
  "author": "Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)",  // 以上的简写

  "contributors": [],  // 包的作者们，单个数组内容同author

  "files"

  "main": "./index.js",  // 指定模块的入口文件

  "bin"

  "man"

  "repository": {  // 代码托管
    "type": ".git",  // 托管的类型
    "url": "https://github.com/npm/npm.git"  // 托管地址
  }
}
```

参考文章
https://www.cnblogs.com/paris-test/p/9760308.html

## 版本
### 版本号
```
"bluebird": "^3.3.4",
"body-parser": "~1.15.2"
```
- ^
  默认升级版本第二位的数字
- ~
  默认升级版本第三位的数字
## 版本数字的意义
1.15.2
- MAJOR ( 对应1 ) 
  这个版本号变化了表示有了一个不可以和上个版本兼容的大更改
- MINOR ( 对应15 )
  这个版本号变化了表示有了增加了新的功能，并且可以向后兼容
- PATCH ( 对应2 )
  这个版本号变化了表示修复了bug，并且可以向后兼容