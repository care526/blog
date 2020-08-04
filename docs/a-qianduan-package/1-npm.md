# NPM

[npm文档](https://www.axihe.com/api/npm/api/api.html)
### init
- npm init
  初始化当前项目，指定作者，包名等基础信息
- npm init --yes
  同上，直接使用默认数据，不再一一询问

### install / i(别名)
- npm i packageName
  安装packageName包，默认添加到dependencies里，默认npm仓库最新版本
- npm i packageName -S/--save
  同上
- npm i packageName@3.0.1
  同上(指定包的版本)
- npm i packageName -D/--save-dev
  添加依赖包到devDependencies

### npm uninstall
```
npm unstall XXX --save  # 移除XXX包依赖
```

### npm update
更新当前包版本

### npm run
会在package.json中去寻找scripts字段，去执行对应的命令
如：npm run serve  /  npm run build
找到了命令在

### npm version
1.1.2-0 --> 大号.中号.小号-预发布号  
- npm version patch  
  升级补丁版本号
- npm version minor  
  升级小版本号
- npm version major  
  升级大版本号
- npm version patch -m '[patch]'  
  提升小号，同时提交一个commit log [patch]
![](./images/version.png)

### link
- npm link
  在本地包所在的目录执行  
  1. 将本地包链接到全局模块安装路径
  2. 为bin文件创建软连接，链接到全局的node命令安装目录
- npm link devPackageName
  在项目中使用本地的包(前提是包已创建链接)

### unlink
  - npm unlink  
  取消本地包的链接  
  在本地包所在的目录执行  

### adduser
- npm adduser
  添加用户  
  根据提示输入用户名密码即可

### publish
- npm publish  
  更新npm包，必须更改版本号，否者会报错(建议遵循Semver<语义化版本号>规范)
.npmignore 和 .gitignore 可以排除一些文件不上传  
npmignore的优先级更高，但是建议使用gitignore  
#### npm模块目录
- bin：存放可执行二进制文件的目录
- lib：存放js代码的目录
- doc：存放文档的目录
- test：存放单元测试用例代码的目录

### config
- npm config ls -l  
  查看npm的所有配置，包括默认配置
- npm config get globalconfig
  查看npm全局配置文件的位置
- npm config delete <key>  
  删除指定的配置项
- npm config set <key> <value>
  设置指定的配置项
#### npmrc文件
npmrc文件所处位置的优先级：  
- 工程内配置文件 .npmrc
- 用户级配置文件 ~/.npmrc
- 全局配置文件 npm config get globalconfig输出路径目录下的 .npmrc
- npm内置配置文件

## .npmrc

****
## package.json
```json
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

  "contributors": [
    "Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)",
    "Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
  ],  // 包的作者们，单个数组内容同author

  "files"

  /* 
    指定程序的入口文件
    其他项目在引用这个npm包时，实际上引入的是这个文件暴露的模块
  */
  "main": "./index.js",

  // 当前模块包的可执行文件，执行命令care
  "bin": {
    "care": "./care.js"
  }

  "man": "",
  
  // 线上依赖的包
  "dependencies": {
    "react": "1.14.0"
  },
  
  // 本地依赖的包
  "devDependencies": {
    "node-sass": "1.14.0"
  },

  "repository": {  // 代码托管
    "type": ".git",  // 托管的类型
    "url": "https://github.com/npm/npm.git"  // 托管地址
  }
}
```

### 版本号
```
"bluebird": "^3.3.4",
"body-parser": "~1.15.2"
```
- ^
  默认升级版本第二位的数字
- ~
  默认升级版本第三位的数字

### 版本数字的意义
1.15.2
- MAJOR ( 对应1 ) 
  这个版本号变化了表示有了一个不可以和上个版本兼容的大更改
- MINOR ( 对应15 )
  这个版本号变化了表示有了增加了新的功能，并且可以向后兼容
- PATCH ( 对应2 )
  这个版本号变化了表示修复了bug，并且可以向后兼容

### 参考文章
https://www.cnblogs.com/paris-test/p/9760308.html