# nvm

## 切换淘宝源
```bash
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
```

## 命令
### ls
```bash
nvm ls  # 当前系统上可以使用的node版本
```

### install
nvm install [version]
```bash
nvm install 10.8.0  # 下载10.8.0版本
```

### use
nvm use [version]
```bash
nvm use 10.15.1 # 使用指定的node版本
```