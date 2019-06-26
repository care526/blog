## new Promise()
创建Promise实例
```
new Promise((resolve, reject) => {
  //some code
  if (/* 异步成功 */) {
    resolve(value)
  } else {
    reject(error)
  }
})
//也可以
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

## Promise.all()
将多个Promise实例包装为一个新的Promise实例  
只有所有的成功，才会返回resolve，为所有返回值组成的数组  
只要有一个失败，就返回reject，值为第一个失败的Promise的reject  

## Promise.resolve()
将现有对象转化为一个直接返回resolve的Promise对象  

## Promise.resolve()
将现有对象转化为一个直接返回reject的Promise对象  

# 问题
## 传给Promise的数据处理函数(resolve,reject),中无法访问外层this
1. 直接使用箭头函数，绑定外层函数作用域，可以访问到this  
2. 在外层函数中定义一个this的引用`var _this = this`,在普通函数中就可以使用_this来访问this  

## async-await
```
async function care () {
  console.log(1);
  await new Promise((v, j) => {
    v(2)
  })
  console.log(3)
}
care().then(v => {
  console.log(v)
})  
// 结果 1 3 2
```