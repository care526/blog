# 异步

node中提供了四种异步的方式，都是代码执行完成后，执行异步的代码
- setTimeout()  采用的是类似IO观察者
- setInterval()  采用的是类似IO观察者
- setImmediate()  采用的是check观察者
- process.nextTick()  采用的是idle观察者
  三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者

process.nextTick()，效率最高，消费资源小，但会阻塞CPU的后续调用； 
setTimeout()，精确度不高，可能有延迟执行的情况发生，且因为动用了红黑树，所以消耗资源大； 
setImmediate()，消耗的资源小，也不会造成阻塞，但效率也是最低的。