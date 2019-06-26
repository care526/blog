## nvm
安装：nvm install 4.4.5
设置默认: nvm alias default 4.4.5
切换版本：nvm use 6
列出当前本地版本：nvm ls
列出远端可安装版本：nvm ls-remote

create-react-app命令
npm start    开始项目
npm run build   在build文件夹生成上线文件
npm install   加载node_modules

npm install --save   安装用于发布到生产环境的安装包
npm install --save-dev　安装用于开发环境的安装包
------------------------------
var http = require("http")  引用模块
var url = require("url")

var server = http.createServer(function(request,response){
  xxxxxxxxxxxx代码
}).listen(3000,"127.0.0.1")

response.writeHead(statusCode[, statusMessage][, headers])  用来设置响应头

response.end()  表示相应结束

request.url 属性,返回,当前的url网址
url.parse(xxx,[true]) 可拆解当前的url  true:返回的是个对象
还有.pathname .query .hash .slashes 属性

fs.readFile(filename,function(err,data){})

异步变为同步,使用匿名函数的递归方法

模块
exports.XXX = 属性;
exports.XXX = 方法;
module.export = {};

---------------------------------------


Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境
使得 JavaScript 能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力，是目前最简单的全栈式语言
Node.js通常被用来开发低延迟的网络应用，也就是那些需要在服务器端环境和前端实时收集和交换数据的应用（API、即时聊天、微服务）
Callback、Promise 到 Async函数




模块系统
在node中内置了一些核心模块，可通过模块名直接引用
用npm安装的模块包，也可直接通过包名引用
引用本地js模块文件，需添加绝度路径或相对路径
var http = require(‘http’);  //引入http模块
exports.name = ‘care’;  //为暴露的对象添加属性
exports.getnName = function(){};  //也可以是函数等
module.exports = Persion;  //重写module.exports，默认为一个空对象{}
function Persion (name) { this.name = name; }
Persion.prototype.talk = function () { console.log(this.name); }


## 流
流可以是可读的、可写的、或者可读可写的。 所有的流都是 EventEmitter 的实例
const stream = require('stream');

Node.js 中有四种基本的流类型：
Writable - 可写入数据的流（例如 fs.createWriteStream()）。
Readable - 可读取数据的流（例如 fs.createReadStream()）。
Duplex - 可读又可写的流（例如 net.Socket）。
Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。