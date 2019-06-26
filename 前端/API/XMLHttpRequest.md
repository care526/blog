## 属性
### XMLHttpRequest.readyState  
XMLHttpRequest对象的状态  
0：已创建/被abort()方法重置  
1：open()方法已调用，send()方法没调用  
2：send()方法以调用，HTTP请求已发送  
3：所有响应头部已接收，响应体开始接收，但未完成  
4：HTTP响应已完全接收  

### XMLHttpRequest.status  
HTTP状态代码，200表示成功  

### XMLHttpRequest.statusText  
HTTP状态代码的字符串形式，‘OK’/‘Not Found’ ......  

### onreadystatechange
当readyState属性改变的时候，调用该函数

### timeout  
设置请求的等待时长(如3000)，单位ms  
回调函数ontimeout(有兼容性问题，Opera、Firefox和IE 10支持该属性，IE 8和IE 9的这个属性属于XDomainRequest对象，而Chrome和Safari还不支持)  
```
xhr.ontimeout = function () {
  alert('请求超时')
}
```

## 方法
### abort()  
取消当前响应，关闭连接并且结束如何未决的网络活动。同时将XMLHttpRequest 对象重置为 readyState 为 0 的状态  

### getAllResponseHeaders()  

### getResponseHeader()

### open()  
初始化HTTP请求参数，如url、method，但不发送请求  

### send()  
发送HTTP请求

### setRequestHeader(header, value)  
设置请求头，只能在readyState为1的时候调用(open之后，send之前)
如何设置请求头？
