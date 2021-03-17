# yarn

## 镜像源
### 查看
```bash
yarn config get registry
```
### 设置
```bash
# 临时修改yarn源 
yarn save package_name --registry https://registry.npm.taobao.org/
# 淘宝
yarn config set registry https://registry.npm.taobao.org/
# 官方
yarn config set registry https://registry.yarnpkg.com
```

### 初始化一个新项目
```bash
yarn init
```

### 安装所需的依赖
```bash
yarn
yarn install
```

### 添加依赖，默认加到线上依赖
```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### 全局安装
```bash
yarn global add ...
```

### 升级依赖
```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 卸载依赖
```bash
yarn remove [package]
```