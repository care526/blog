# Promise

## new Promise()
创建Promise实例
```js
new Promise((resolve, reject) => {
  //some code
  if (/* 异步成功 */) {
    resolve(value)
  } else {
    reject(error)
  }
})
//也可以
promise.then(res => {
  // success
}, error => {
  // failure
});
promise.then(res => {
  // success
}).catch(error => {
  // failure
});
```

## Promise.all
将多个Promise实例包装为一个新的Promise实例  
只有所有的成功，才会返回resolve，为所有返回值组成的数组  
只要有一个失败，就返回reject，值为第一个失败的Promise的reject  

## Promise.race
将多个Promise实例包装为一个新的Promise实例  
哪一个promise转态先变更，就返回谁，无论resolve还是reject
只执行一个

## Promise.resolve
将现有对象转化为一个直接返回resolve的Promise对象  

## Promise.reject
将现有对象转化为一个直接返回reject的Promise对象  

## 问题
### 传给Promise的数据处理函数(resolve,reject),中无法访问外层this
1. 直接使用箭头函数，绑定外层函数作用域，可以访问到this  
2. 在外层函数中定义一个this的引用`var _this = this`,在普通函数中就可以使用_this来访问this  

### async-await
```js
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

## 简易实现
```js
//极简的实现+链式调用+延迟机制+状态
class Promise {
  callbacks = [];
  state = 'pending';//增加状态
  value = null;//保存结果
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    if (this.state === 'pending') {//在resolve之前，跟之前逻辑一样，添加到callbacks中
      this.callbacks.push(onFulfilled);
    } else {//在resolve之后，直接执行回调，返回结果了
      onFulfilled(this.value);
    }
    return this;
  }
  _resolve(value) {
    this.state = 'fulfilled';//改变状态
    this.value = value;//保存结果
    this.callbacks.forEach(fn => fn(value));
  }
}
```