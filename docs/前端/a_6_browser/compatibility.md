# 兼容性

IE怪异的盒模型，width = content + padding + border
W3C的盒模型，width = content
在css中设置 box-sizing：border-box，来使用怪异模式解析宽高

低版本的IE浏览器，解析PNG24出现问题

各个浏览器的默认样式可能不同，用编写统一的reset.css来统一

IE获取自定义属性还支持获得常规属性的方式来获取自定义属性，所以统一用getAttribute()来获取自定义的属性

IE的event对象没有pageX，pageY属性，代替的是x，y属性

在HTML5允许除IE外的所有浏览器。setTimeout setInterval 传入额外的参数，并在调用参数的时候把这些参数传递过去。

IE8及以前的浏览器不支持事件捕获，但拖放事件要用到事件捕获