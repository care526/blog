# Rxjs

## Observable
可观察对象  
运算是同步的
```ts
export class Observable<T> implements Subscribable<T> {
  public _isScalar: boolean = false;
  // source: Observable<any>;
  // operator: Operator<any, T>;

  lift<R>(operator: Operator<T, R>): Observable<R> {}
  subscribe(observer?: PartialObserver<T>): Subscription;
  // _trySubscribe(sink: Subscriber<T>): TeardownLogic {}
  forEach(next: (value: T) => void, promiseCtor?: PromiseConstructorLike): Promise<void> {}
  _subscribe(subscriber: Subscriber<any>): TeardownLogic {}
  pipe(...operations: OperatorFunction<any, any>[]): Observable<any> {}
  toPromise(promiseCtor?: PromiseConstructorLike): Promise<T> {}
}
```

## Observer
观察者 
```ts
// 抽象类
export interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```

## Subscriber
订阅者
```ts
export class Subscriber<T> extends Subscription implements Observer<T> {
  
}
```

## Subscription
订阅(n)
```ts
export interface Unsubscribable {
  unsubscribe(): void;
}
export interface SubscriptionLike extends Unsubscribable {
  unsubscribe(): void;
  readonly closed: boolean;
}
export class Subscription implements SubscriptionLike {
  // close 为 true 的 subscription
  public static EMPTY: Subscription
  public closed: boolean = false;
  protected _parentOrParents: Subscription | Subscription[] = null;
  private _subscriptions: SubscriptionLike[] = null;

  unsubscribe(): void {}
  // export type TeardownLogic = Unsubscribable | Function | void;
  add(teardown: TeardownLogic): Subscription {}
  remove(subscription: Subscription): void {}
}
```

## Subject
是一种特殊类型的 Observable  
鸭式辩型
```ts
export class Subject<T> extends Observable<T> implements SubscriptionLike {

}
```
### 特殊类型的Subject
- BehaviorSubject  
- ReplaySubject  
- AsyncSubject  

## Operators

## Scheduler









