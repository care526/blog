# yarn

### 设置镜像源
```bash
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
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