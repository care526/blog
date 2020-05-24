# Bom

## URL
- history
  history.length  # 存的是用户的浏览历史的元素数量，但脚本不能直接访问以保存的URL
  history.state  # 
  history.back()  # 返回前一页
  history.go(n);  # 跳转到当前页面的第几页(前几页/后几页)
  history.forward()  # 
  history . pushState(data, title [, url ] )
  history . replaceState(data, title [, url ] )
  window . history . scrollRestoration [ = value ]

## 加载
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
  ```
  var timer = setTimeout(function(){}, time)
  clearTimeout(timer)
  ```
- setInterval
  ```
  var timer = setInterval(function(){}, time);
  clearInterval(timer)
  ```





temp:

由于历史的原因，以上两个函数的第一个参数可以传入字符串，相当于执行eval()进行求值运算
浏览器的定位和导航
window.location === document.location;
Window对象的location属性引用的是Location对象
Document对象的location属性也引用到了Location对象
Location对象的href属性是一个字符串，包含了URL的完整文本
还有其他属性protocol host hostname port pathname search
载入新的文档
location.assign(newHref) 载入新的文档，可以通过后退按钮返回上一个文档
newHref 是一个字符串，是相对于当前文档的目录的　如“care.html” (就是当前目录下的care.html文档)
location.replace(newHref)　 同上，但会把当前文档从浏览历史中删除
location.reload()　　　让浏览器重新载入当前文档
还有几种方式是：
location = ''care.html''; 相对路径　直接赋值给location对象
location = ''http://www.baidu.com''; 直接赋值新的URL
location = "#top" 会跳转到当前文档上ID为top的元素上，如果没有，就到达文档头部，也可以传其他ID
location.search = "?value=5" 载入其他界面，在当前文档上跳转
浏览器历史
Window对象的history属性引用的是该窗口的History对象
History.length 保存的是用户的浏览历史的元素数量，但脚本不能直接访问以保存的URL
History.back(); 后退到上一个文档
History.forward();　 前进到下一个文档
History.go(X); 接受一个整数，向前（正）或者向后（负）跳转任意多页
浏览器和屏幕信息
浏览器的信息见权威指南的346页
Window对象的screen属性引用的是Screen对象
screen.width 　　　以像素为单位的窗口的宽
screen.height 　　 以像素为单位的窗口的高
screen.colorDepth　 显示的BPP值
screen.availWidth　 以像素为单位的窗口的实际可用的宽
screen.availHeight 　以像素为单位的窗口的实际可用的高
对话框
alert(); 向用户显示一条信息的等待用户关闭的对话框
confirm(); 也是显示一条信息，要求用户点击“确定”或“取消”，并返回一个bool值
prompt(); 显示一条消息，等待用户输入字符串，并返回那个字符串
三种方法会产生代码阻塞