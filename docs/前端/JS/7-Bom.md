# Bom

## URL
### history
history.length  # 存的是用户的浏览历史的元素数量，但脚本不能直接访问以保存的URL
history.state  # 
history.back()  # 返回前一页
history.go(n);  # 跳转到当前页面的第几页(前几页[正数]/后几页[负数])
history.forward()  # 前进到下一个文档
history.pushState(data, title [, url] )
history.replaceState(data, title [, url] )
window.history.scrollRestoration [ = value]
### location
window.location === document.location  
Window对象的location属性引用的是Location对象  
Document对象的location属性也引用到了Location对象  
#### 属性
- href
  url的完整文本字符串  
- hash
  第一个#及其后面所有字符的字符串
- protocol
  当前url的协议
- host 
  主机名和端口号
- hostname 
  主机名
- port 
  端口号
- pathname 
  url的路径部分
- search
  从?开始的url的query部分
#### 方法
- assign(url)
  载入新的文档，可以通过后退按钮返回上一个文档
  ```js
  window.location.assign(reUrl)  // 相对路径，相对当前文档所在目录
  window.location.assign(asbUrl)  // 绝对路径，也就是完整的文档地址
  ```
- replace(url)
  同上，但会把当前文档从浏览历史中删除
- reload()
  让浏览器重新载入当前文档
### 载入文档的其他方式
```js
location = "care.html"  // 相对路径　直接赋值给location对象
location = "http://www.baidu.com"  // 直接赋值新的URL
location = "#top"  // 会跳转到当前文档上ID为top的元素上，如果没有，就到达文档头部，也可以传其他ID
location.search = "?value=5"  // 载入其他界面，在当前文档上跳转
```

## 加载方法
- window.ready  # 页面的DOM结构已经加载完毕，不包括媒体元素
- window.onload  # 页面全部都加载完毕
- window.onbeforeunload  # 
- window.onunload  # 

## 储存
- sessionStorage
  ```
  sessionStorage.setItem('xxx', 'yyy')  //xxx是键值，yyy是属性值
  let yyy = sessionStorage.getItem('xxx')  //获取xxx的值
  sessionStorage.removeItem(‘xxx')  //清除某一项
  sessionStorage.clear()  //清除所有
  ```
- localStorage
  ```
  localStorage.setItem('xxx', 'yyy');  //xxx是键值，yyy是属性值
  let yyy = localStorage.getItem('xxx');  //获取xxx的值
  localStorage.removeItem（‘xxx'）;  //清除某一项
  localStorage.clear()  //清除所有
  ```

## 视窗
- window.screen
  Window对象的screen属性引用的是Screen对象  
  - screen.width 　　　
    以像素为单位的窗口的宽
  - screen.height 　　 
    以像素为单位的窗口的高
  - screen.colorDepth　 
    显示的BPP值
  - screen.availWidth　 
    以像素为单位的窗口的实际可用的宽
  - screen.availHeight 　
    以像素为单位的窗口的实际可用的高
- window.innerHeight
  当前浏览器窗口的视口高度(只读属性)
- window.innerWidth
  当前浏览器窗口的视口宽度(只读属性)

## 样式
- window.getComputedStyle(DOM)  # 得到该DOM元素的style属性

## 编解码
- escape
  编码字符串，得到的是字符串
- unescape
  解码字符串，得到字符串
- encodeURI
  对URI进行编码，不对下列字符进行编码：“:”、“/”、“;”和“?”
- decodeURI
  解码URI，返回字符串
- encodeURIComponent
  编码URI，会对所有字符编码，发往服务器是无效的
- decodeURIComponent
  对应的解码方法

参考文章：https://www.cnblogs.com/tanxiang6690/p/7079876.html

## 定时器
- setTimeout
  ```js
  var timer = setTimeout(function(){}, time)
  clearTimeout(timer)
  ```
- setInterval
  ```js
  var timer = setInterval(function(){}, time);
  clearInterval(timer)
  ```

## 对话框
```js
alert()  // 向用户显示一条信息的等待用户关闭的对话框
confirm()  // 也是显示一条信息，要求用户点击“确定”或“取消”，并返回一个bool值
prompt()  // 显示一条消息，等待用户输入字符串，并返回那个字符串
```
三种方法都会产生代码阻塞

## console
### console.log()
`console.log('xxx')`
### console.info()
`console.info('xxx')`
### console.error()
`console.error('xxx')`
### console.warn()
`console.warn('xxx')`
### console.time()  console.timeEnd()
接受相同的参数，计算中间的时间差，会对传入的参数转字符串(toString)
```js
console.time('xxx')
// ...
console.timeEnd('xxx')
```
输出：xxx: 1.3456789ms  
### console.count()
打印传入的数据，并显示次数，会对传入的参数转字符串(toString)
```js
console.count('xxx')
console.count('xxx')
```
输出: xxx: 1  
      xxx: 2  
### console.table()
以表格的形式展示一个对象的数据，其他参数同log方法  
`console.table({a: 1})`
### console.group()  console.groupEnd()
对打印的数据分组，折叠展开  
```js
console.group('第一层');
  console.info(123123);
  console.group('第二层');
    console.log('error');
    console.error('error');
    console.warn('error');
  console.groupEnd();
console.groupEnd();
```
### console.trace()
追溯你的逻辑执行过程  
```js
function d(a) {
  console.trace();
  return a;
}
function b(a) {
  return c(a);
}
function c(a) {
  return d(a);
}
let a = b('123');
```
输出：各个函数的名字，不断向上找调用者  
### console.assert
当第一个参数为false时，才会打印第二个参数  
`console.assert(false, 'asdasd')`
### console.clear
清空控制台  
### 为打印设置样式
会为%c后面的字符添加样式
```js
let style = 'background: red';
console.log('啊实打实的 %c asdasd', style);
```