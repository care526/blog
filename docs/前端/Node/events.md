# events

## 引用模块
```
const events = require('events')
```
## 以下实例都是和下面代码一起的
```
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();
```

## eventEmitter.on(eventName, listener)  
  注册监听器
- 是eventEmitter.addListener(eventName, listener)的别名
- 返回监听器的实例对象，可以链式调用


## eventEmitter.once(eventName, listener)  
  注册使用一次的监听器
- 当事件被触发的时候，先移除监听器，然后再执行回调函数
- 返回监听器的实例对象，可以链式调用 

## emitter.prependListener(eventName, listener)  
  可将事件监听器添加到监听器数组的开头
- 返回监听器的实例对象，可以链式调用 

## emitter.prependOnceListener(eventName, listener)  
  可将事件监听器添加到监听器数组的开头(执行一次的监听器)
- 返回监听器的实例对象，可以链式调用 

## eventEmitter.off(eventName, listener)  
  移除事件上的监听器
是eventEmitter.removeListener(eventName, listener)的别名

## eventEmitter.removeAllListeners([eventName])  
  移除全部监听器或全部监听器
- 返回监听器的实例对象，可以链式调用 

## eventEmitter.removeListener(eventName, listener)  
  移除事件监听器数组中指定的listener
- 最多只能移除一个监听器，如果有多个需要多次调用
- 再事件触发的过程中，不能移除监听器
- 返回监听器的实例对象，可以链式调用 

## 自带的一些规定好名字的事件，但是还要注册
```
eventEmitter.on('newListener', listener);  // 当有新的事件注册时触发
eventEmitter.on('removeListener', listener);  // 当有事件被移除时触发
eventEmitter.on('error', listener);  // 当有error事件触发时
```

## eventEmitter.emit(eventName[, ...args])  
  触发事件
```
myEmitter.on('event', function (a, b) {
  console.log(this);  // this指向的是事件触发器实例对象 => myEmitter
})
// 如果回调函数使用ES6的箭头函数，this不会绑定事件触发器实例对象
myEmitter.emit('event', 'a', 'b');
```

## eventEmitter.setMaxListeners(n)  
  设置单个实例的最大监听器数量
每个事件默认可以注册10个监听器
EventEmitter.defaultMaxListeners 设置该属性可以修改所有实例的最大监听器的数量
```
myEmitter.setMaxListeners(20);  // 设置单个(再实例上设置)
MyEmitter.defaultMaxListeners = 20;  // 设置所有(再类上设置)

```

## eventEmitter.getMaxListeners()  
  返回当前监听器最大限制的数值

## eventEmitter.eventNames()  
  返回已注册监听器的事件名的数组

## eventEmitter.listenerCount(eventName)  
  返回正在监听事件上监听器的数量

## eventEmitter.listeners(eventName)  
  返回正在监听事件上监听器数组的副本

## eventEmitter.rawListeners(eventName)  
  返回 eventName 事件的监听器数组的拷贝
- 直接执行数组里的函数，会移除监听器
- 调用数组函数的listener()，函数会执行，但是监听器不会被移除