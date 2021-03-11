# Rxjs

## Observable
可观察对象  
运算是同步的

## Observer
观察者  

## Subscription
订阅  
```js
var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
```
取消订阅  
```js
subscription.unsubscribe();
```

## Subject
是一种特殊类型的 Observable  
### 特殊类型的Subject
- BehaviorSubject  
- ReplaySubject  
- AsyncSubject  

## Operators

## Scheduler