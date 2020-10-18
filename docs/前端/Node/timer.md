# timer

## 定时器
- setImmediate
将接受的函数推入事件队列的最后等待执行
```
setImmediate(() => {
  // xxx
})
```

- setInterval
循环定时器，每指定的时间将函数推入待执行队列
```
setInterval(() => {
  // xxx
}, 1000)
```

- setTimeout
延时指定时间，执行函数
```
setTimeout(() => {
  // xxx
}, 1000)
```

- clearImmediate(immediate)

- clearInterval(timeout)

- clearTimeout(timeout)