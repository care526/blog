## JQ的插件的编写
在$.fun.extend()传入一个对象，包含一个是方法的属性，用于扩展JQ
```
(function ($) {  //这样做可以让插件调用JQ的方法
    $.fun.extend({
        //插件的名字
        plugName: function () {}
    })
})(jquery);
```