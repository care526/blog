# 常用软件的安装
## nvm安装
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.nvm/nvm.sh
- nvm常见命令
nvm ls  #当前系统上可以使用的node版本
nvm use 版本（10.15.1） #使用指定的node版本
- 淘宝源
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/dist 

## node安装
nvm install 10.8.0    
- 修改淘宝源    
npm config set registry https://registry.npm.taobao.org    
- 验证是否成功    
npm config get registry    
- 常用NPM包的安装    
npm install -g webpack webpack-cli create-react-app    
- TyprScript的安装    
npm install -g typescript    
- - 编译ts文件    
tsc a.ts    
- vue-cli的安装    
npm install -g @vue/cli    
- - 创建项目    
vue create projectName    

## yarn的安装
npm i -g yarn
```
设置镜像源
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
- 常用命令
  yarn init  # 初始化新项目
  yarn / yarn install  # 安装项目的全部依赖
  yarn add package  # 添加依赖包
  yarn upgrade package  # 升级依赖包
  yarn remove package  # 移除依赖包
  yarn add package --dev  # 添加到devDependencies依赖中
  yarn add package --peer  # 添加到peerDependencies依赖中
  yarn add package --optional  # 添加到optionalDependencies依赖中

## git安装
sudo apt-get install git  
[Git常用命令](./Git.md)

## svn安装
sudo apt-get install subversion  
sudo apt-get install libapache2-mod-svn  
[SVN常用命令](./svn.md)

## mysql安装
1. 配置apt-get源
   下载MySQL官网提供的DEB包，以将MySQL的仓库添加到apt-get的源中
   `wget https://dev.mysql.com/get/mysql-apt-config_0.8.9-1_all.deb`
   `sudo dpkg -i ./mysql-apt-config_0.8.9-1_all.deb`
   ps：在终端中跳出的弹窗，一路ok就好
2. 更新apt-get源
   `sudo apt-get update`
3. 安装
   `sudo apt-get install mysql-server`
   ps：安装时间有点长
- 常见的操作
  ```
  sudo service mysql start  # 开启MySQL服务
  sudo service mysql stop  # 关闭服务
  sudo service mysql restart  # 重启服务
  mysql -u root -p  # 登陆
  ```

## tree安装
sudo apt-get install tree  
**常用命令**
tree 按层级打印当前所有目录
-a 打印所有层级
-L n 打印n层的目录(n超过了总层数，就是所有啦)
-u 显示拥有者
-s 显示目录文件大小
-p 显示权限

## 配置java环境  
[Deepin Linux 安装JDK - keitsi - 博客园](https://www.cnblogs.com/keitsi/p/5817433.html)  
第一步：将下载的压缩包解压，放在/usr/lib/jvm/java目录下   
第二部：修改 .bashrc配置文件，在最后加  export PATH=$PATH:/usr/lib/jvm/java/xxx/bin。xxx是解压的目录名   
```
javac name.java    编译name.java文件   
java name.class    运行java的编译文件，class可以省略   
```

## eclipse的安装
在清华大学的镜像站搜索eclipse,下载对应的压缩包,解压在想安装的位置,目录的可执行文件打开即可
在eclipse.ini文件内容第二个openFile的后面加上(jdk的目录)
```
-vm
/home/care/config/java-jdk-8/bin
```

## tomcat的安装
在官网下载压缩包,解压到指定目录,赋予 755 权限,运行tamcat里面的bin目录的脚本文件,控制tomcat的开启与关闭

## 配置C++环境，安装gcc g++
sudo apt-get install build-essential
sudo apt-get install libtool

## Vs Code
### 常用插件
- markdown
  Markdown All in One
  Markdown Preview Enhanced
- 主题/图标
  Material Icon Theme
- 中文
  Chinese (Simplified) Language Pack for Visual Studio Code
- svn
  SVN
  TortoiseSVN
- 路径补全
  Path Intellisense
- leetcode
  LeetCode
- 格式
  ESLint
  Vetur
  Prettier - Code formatter


### 快捷键
ctrl + f  打开查找功能(左边的小箭头可以开启替换功能，右边的按钮设置单个还是全局替换)  
ctrl + `(反引号)   打开终端  