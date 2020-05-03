# 跨域

## 什么时候产生跨域
- 不同协议
- 不同端口
- 不同域名
- 域名和对应的ip地址
- 主域相同，子域不同
ps: 协议和端口造成的跨域，前端是解决不了的.
跨域是请求的数据被浏览器拦截了,并不是不能请求  

## 解决方案
- CORS(ie8/9 不支持cros,ie10将会支持)
  后端响应头设置Access-Control-Allow-Origin即可
- jsonp
  具有src的HTML标签都不受同源策略的影响
- HTML5的postMessage
  兼容性：IE8+ 和其他都支持
  
- location.hash
- document.domain
- window.name
  当前页面都对name属性有读写权限
- 代理服务器(node, nginx)
- WebSocket

## 详细文章
```
https://juejin.im/entry/59b8fb276fb9a00a42474a6f  
https://juejin.im/post/5815f4abbf22ec006893b431  
```