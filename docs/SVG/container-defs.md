# 引用元素 defs
```svg
<svg width="100%" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <defs>
        <linearGradient id="Gradient01">
            <stop offset="20%" stop-color="#39F" />
            <stop offset="90%" stop-color="#F3F" />
        </linearGradient>
    </defs>

    <rect x="10" y="10" width="60" height="100" fill="url(#Gradient01)" />

</svg>
```
defs里面定义的元素不会在页面上显示  
需要在其他地方用use引入