# 用过的包

## 推荐全局安装的包
```bash
npm i -g yarn ts-node @angular/cli @vue/cli create-react-app anywhere
```

## 编译相关
- typescript
- node-sass
- less

## 脚手架
- @vue/cli    
  vue脚手架
- prompts  
  node命令行的输入库
- commander  
  专门用来处理命令行交互的包
- inquirer  
  让命令行支持问答交互
- chalk
  可以改变终端中输出文字的 颜色 背景 下划线 等  
  地址：https://github.com/chalk/chalk  
  ```js
  // 蓝色，背景红色的下划线文字
  console.log(
    chalk.blue.underline.bgRed('Hello world!')
  );
  ```

## 工具库
- dayjs  
  日期相关的库，不大
- big.js  
  精确计算的库
- good-storage  
  更好的使用localStorage和sessionStorage
- qs  
  将对象转化为由key=value组合的字符串
  用于封装get请求，输入对象转化为字符串拼接在url的后面
- better-scroll
  移动端的滚动库

## node相关的
- fs-extra  
  提供了比原生fs更多的方法，同时继承了原生fs的所有写法，api是promise的
- consola  
  输出包
- shelljs  
  调用系统命令的包
- pkg  
  将本地js，打包为三个平台的文件，没有node环境也可以运行
- envinfo  
  获取系统信息
- nodemon
  监听文件变更，重新运行  
