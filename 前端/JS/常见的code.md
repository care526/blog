## 防抖代码
```
function care (fn, wait) {
  var timer = null;
  return function () {
    if (timer !== null) 
        clearTimout(timer);
    setTimeout(fn, wait)
  }
}
//使用如下:
window.onresize = care(() => {
  /* 处理代码，也可以传一个具名函数 */
}, 400);
```

## 浅拷贝
`var a = Object.assign(b);`
`var a = {...b}`

## 深拷贝
```
var dog = {};
var cat = JSON.parse(JSON.Stringify(dog))
```
第二种方法，使用递归赋值对象的非引用类型的数据完成,具体代码以后再写