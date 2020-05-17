# 其他
- HTML5新特性  
用于绘画的 canvas 元素，svg元素  
用于媒介回放的 video 和 audio 元素  
对本地离线存储的更好的支持  
语义化的标签：article、footer、header、nav、section等  
新的表单控件：calendar、date、time、email、url、search等  
废弃了一些可以用CSS实现的标签  

- html5与浏览器的兼容性问题  
IE8/IE7/IE6支持通过document.createElement方法产生的标签  
可以利用这一特性让这些浏览器支持HTML5新标签  
浏览器支持新标签后，还需要添加标签默认的样式。（很麻烦）  

- DOCTYPE作用：激活各种渲染模式  
<！DOCTYPE html>激活标准模式（html5 的doctype）  
如果没有写DOCTYPE或写的格式不正确，文档会以兼容模式显示  

浏览器加载JS脚本堵塞异步执行的
<script src="path/to/myModule.js" defer></script>
defer等到页面渲染完成才会运行代码。
多个defer标记的JS脚本按照出现的先后顺序加载
<script src="path/to/myModule.js" async></script>
async 浏览器解析到这行代码就会下载，一旦下载完成，不管渲染引擎处于什么阶段，直接打断运行下载的代码
当有多个async标记的JS脚本，不按照顺序运行，谁先下载完成，就直接运行