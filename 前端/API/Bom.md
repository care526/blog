## sessionStorage
```
sessionStorage.setItem('xxx', 'yyy');  //xxx是键值，yyy是属性值
let yyy = sessionStorage.getItem('xxx');  //获取xxx的值
sessionStorage.removeItem（‘xxx'）;  //清除某一项
sessionStorage.clear()  //清除所有
```

## localStorage
```
localStorage.setItem('xxx', 'yyy');  //xxx是键值，yyy是属性值
let yyy = localStorage.getItem('xxx');  //获取xxx的值
localStorage.removeItem（‘xxx'）;  //清除某一项
localStorage.clear()  //清除所有
```

## history
```
history.back()  //返回前一页
history.go(n);  //跳转到当前页面的第几页(前几页/后几页)
```

## window.innerHeight
当前浏览器窗口的视口高度(只读属性)


## window.innerWidth
当前浏览器窗口的视口宽度(只读属性)

## window.getComputedStyle(DOM)
得到该DOM元素的style属性