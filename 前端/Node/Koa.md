## 基本用法
```
const Koa = require('koa');
// 路由模块 
const route = require('koa-route');
// 静态资源托管
const serve = require('koa-static');
// 提取post请求的body为键值对
const koaBody = require('koa-body');

app.use(serve('要托管的文件的path'));

app.use(
  route
    .get('/', async (ctx, next) => { // 处理函数体 })
    .get('/a', async (ctx, next) => { // 处理函数体 })
    .post('/b', async (ctx, next) => { // 处理函数体 })
);

const app = new Koa();

app.listen(3000);
```

通过加工req/res对象出处理响应

Context 上下文对象，包含了req和res
res.type  类型
res.body  返回的数据
req.path  请求的路由

ctx.cookie.get('name')
ctx.cookie.set('name', value)

ctx.request.body.name  // 某个body键

## Application
- 属性(我也不知道时干嘛的)
  - app.env
  - app.proxy
  - app.subdomainOffset  主域的长度
  - app.context
    ctx的原型，可以通过编辑app.context来为ctx添加属性

- app.callback()
  使用此回调函数将koa应用挂载到Connect / Express应用程序上
  
- app.use(function)  添加中间件
  ```
  app.use(async ctx => {
    ctx.body = 'Hello World';
  });
  ```
  ```
  app.use(async (ctx, next) => {
    // 部分代码
    await next();
    // 部分代码
  });
  ```

- app.listen(port)
  ```
  app.listen(3000);
  ```
  ```
  const http = require('http');
  const https = require('https');
  const Koa = require('koa');
  const app = new Koa();
  http.createServer(app.callback()).listen(3000);
  https.createServer(app.callback()).listen(3001);
  ```

## Context
- ctx  app.context / Context
- ctx.request  这是Koa的Request
  Request 别名
- ctx.response  这时Koa的Response
  Response 别名
- ctx.req  Node的request
- ctx.res  Ndoe的response
> 建议不要直接处理Node的response，使用Koa的Response
- ctx.state
- ctx.app  应用程序实例引用
- ctx.app.emit(event)  触发event事件
- ctx.cookies.get(name, [options])  获取cookie
  ` ctx.cookies.get('LastVisit', { signed: true })`
- ctx.cookies.set(name, value, [options])  设置cookie
  `ctx.cookies.set('LastVisit', new Date().toISOString(), { signed: true })`
- ctx.throw([status], [msg], [properties])  抛出错误
  ```
  ctx.throw(400);
  ctx.throw(400, 'name required');
  ctx.throw(400, 'name required', { user: user });
  ```
- ctx.assert(value, [status], [msg], [properties])  

## Request(可读流)
- request.header(request.headers)  请求标头对象
- request.method  请求方法
- request.length  返回以数字返回请求的 Content-Length
- request.url  获取请求 URL
- request.originalUrl  获取请求原始URL
- request.origin  获取URL的来源，包括 protocol 和 host
- request.href  获取完整的请求URL，包括 protocol，host 和 url
- request.path  获取请求路径名
- request.querystring  根据 ? 获取原始查询字符串
- request.search  使用 ? 获取原始查询字符串
- request.host  获取当前主机(hostname:port)
- request.hostname  存在时获取主机名
- request.URL  获取 WHATWG 解析的 URL 对象
- request.type  获取请求 Content-Type,不含参数 "charset"
- request.charset  在存在时获取请求字符集
- request.query  获取解析的查询字符串
- request.fresh  检查请求缓存是否“新鲜”
- request.stale  检查请求缓存是否“不新鲜”
- request.protocol  返回请求协议
- request.secure
- request.ip  请求远程地址
- request.ips
- request.subdomains  将子域返回为数组
  如果域名为“tobi.ferrets.example.com”
  如果 app.subdomainOffset 未设置, ctx.subdomains 是 ["ferrets", "tobi"]
  如果 app.subdomainOffset 是 3, ctx.subdomains 是 ["tobi"]
- request.is(types...)
- request.accepts(types)
- request.acceptsEncodings(encodings)
- request.acceptsCharsets(charsets)
- request.acceptsLanguages(langs)
- request.idempotent
- request.socket
- request.get(field)

## Response(读写流)
- response.header(response.headers)  响应标头对象
- response.socket  请求套接字
- response.status  获取响应状态,默认设置为404
- response.message  获取响应的状态消息
  默认情况下, response.message 与 response.status 关联
- response.length  以数字返回响应的 Content-Length
- response.body  获取响应主体
- response.get(field)  不区分大小写获取响应标头字段值 field
  `const etag = ctx.response.get('ETag');`
- response.set(field, value)  设置响应标头 field 到 value
  `ctx.set('Cache-Control', 'no-cache');`
- response.append(field, value)  用值 val 附加额外的标头 field
  `ctx.append('Link', '<http://127.0.0.1/>');`
- response.set(fields)  用一个对象设置多个响应标头fields
  ```
  ctx.set({
    'Etag': '1234',
    'Last-Modified': date
  });
  ```
- response.remove(field)  删除标头 field
- response.type  获取响应 Content-Type 不含参数 "charset"
  `const ct = ctx.type; // // => "image/png"`
- response.is(types...)
- response.redirect(url, [alt])
- response.attachment([filename], [options])
- response.headerSent
- response.lastModified
- response.etag=
- response.vary(field)
- response.flushHeaders()
- 
## 事件
- 错误处理事件
  自定义错误处理事件，默认所有错误输出到stderr
  ```
  app.on('error', (err, ctx) => {
    // 部分代码
  })
  ```


## 异常处理
- 定义全局错误处理函数
```
app.on('error', () => {
  // xxx
})
```
- try / catch
里面不要写异步，捕获不到异步里面的错误
- ctx.throw(code)
```
ctx.throw(400)  // ctx.body会自动填充内容
ctx.throw(500)  // ctx.body会自动填充内容
```
- 自己设置错误code
```
  ctx.response.status = 404
  ctx.response.body = 'Page Not Found'  // 可以自己设置ctx.body
```