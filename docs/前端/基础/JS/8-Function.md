# Function

## 普通函数
this的指向：  
非严格模式，默认绑定的this指向全局对象(如果在对象内部定义的指向这个对象)。严格模式，this指向undefined  

## 箭头函数
### this的指向：  
1- 本身没有this,this的指向继承自外层第一个普通函数的this  
2- this的指向不可手动改变，但可以改变外层第一个普通函数的this指向来间接的改变箭头函数的this指向，但对箭头函数使用call apply bind，这三个函数会自动忽略第一个参数，但可以正常传参  
3- 如果外层没有普通函数，严格模式和非严格模式它的this都会指向window(全局对象)  
### 参数  
1- 箭头函数的内部默认是严格模式  
2- 如果外层没有普通函数，不能使用arguments，会报错。如果有，arguments继承于该普通函数
3- 建议使用...rest来代替argumengts，rest是一个真正的数组，而argumengts是一个类数组的对象

### 其他
1- 不能使用new来调用箭头函数，会报错
2- 没有原型对象prototype


## bind
> 返回一个指定了未来执行上下文的新绑定函数
```ts
const baseNum = 10;
function add(x: number, y: number) {
  return this.baseNum + x + y;
}
add(2, 3); // 15
const add1 = add.bind({ baseNum: 1 });
add1(2, 3); // 6
// 接受额外参数，成为预设值。这种函数也叫偏函数
const add2 = add.bind({ baseNum: 1 }, 2);
add2(3); // 6
```

## call
> 修改函数执行时的上下文
```ts
const baseNum = 10;
function add(x: number, y: number) {
  return this.baseNum + x + y;
}
add(2, 3); // 15
getName.call({ baseNum: 1 }, 2, 3); // 6
```

## apply
> 修改函数执行时的上下文，只是传参数和call不同
```ts
const baseNum = 10;
function add(x: number, y: number) {
  return this.baseNum + x + y;
}
add(2, 3); // 15
getName.apply({ baseNum: 1 }, [2, 3]); // 6
```