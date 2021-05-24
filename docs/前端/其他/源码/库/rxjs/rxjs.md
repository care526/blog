```ts
xxx.subscribe({
  next() {},
});
xxx.subscribe({
  next: () => {}
});
xxx.subscribe(
  () => {}, // next
  () => {}, // error
  () => {}, // complete
)
```



subscribe: 订阅(v)
Subscription: 订阅(n)

Observable： 可观测的
subscriber: 订阅者