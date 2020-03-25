## 三角形
原理：将盒子的高宽设为0，然后将border的某三个方向的边框颜色设置为无
```
border: 10px solid red;
border-top-color: rgba(0,0,0,0);
border-left-color: rgba(0,0,0,0);
border-right-color: rgba(0,0,0,0);
```
同时可以利用伪类来设置三角形

## 绝对定位时铺满父元素
```
position: absolute | fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
```

## 文本三行省略
```
overflow: hidden;
text-overflow: ellipsis;  // 文本溢出，省略号显示
display: -webkit-box;  // 只能针对webkit内核的
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
```