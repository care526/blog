# npm

[npm文档](https://www.axihe.com/api/npm/api/api.html)
****

## 命令
### init
- npm init
  初始化当前项目，指定作者，包名等基础信息
- npm init --yes
  同上，直接使用默认数据，不再一一询问

### install / i(别名)
- npm i packageName
  添加packageName包，默认添加到dependencies里，默认npm仓库最新版本
- npm i packageName -S/--save
  同上
- npm i packageName@3.0.1
  同上(指定包的版本)
- npm i packageName -D/--save-dev
  添加依赖包到devDependencies
- npm i -g packageName
  添加全局依赖包

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
- npm config get [key]
  ```bash
  npm config get globalconfig  # 查看npm全局配置文件的位置
  npm config get registry  # 查看依赖安装源
  ```
- npm config delete [key]  
  删除指定的配置项
- npm config set [key] [value]
  设置指定的配置项
  ```bash   
  npm config set registry https://registry.npm.taobao.org  # 修改淘宝源 
  ```
#### npmrc文件
npmrc文件所处位置的优先级：  
- 工程内配置文件 .npmrc
- 用户级配置文件 ~/.npmrc
- 全局配置文件 npm config get globalconfig输出路径目录下的 .npmrc
- npm内置配置文件

## .npmrc