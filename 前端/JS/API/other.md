## 判断变量类型
- typeof
  ```
  typeof '我是字符串'  // 'string'
  typeof true  // 'boolean'
  typeof 10  // 'number'
  typeof Symbol()  // 'symbol'
  typeof undefined  // 'undefined'
  typeof null  // 'object'
  typeof {}  // 'object'
  typeof []  // 'object'
  typeof (() => {})  // 'function'
  ```
  对于判断是否是对象类型，不太适用
****
- instanceof
  原理：测试构造函数的 prototype 是否出现在被检测对象的原型链上
  ```
  [] instanceof Array  // true
  [] instanceof Object  // true
  ({}) instanceof Object  // true
  (() => {}) instanceof Function  // true
  ```
  问题：数组是对象的子类型，所以还是判断不出来
****
- Object.prototype.toString.call()
  ```
  Object.prototype.toString.call({})  // '[object Object]'
  Object.prototype.toString.call([])  // '[object Array]'
  Object.prototype.toString.call(() => {})  // '[object Function]'
  Object.prototype.toString.call('我是一个字符串')  // '[object String]'
  Object.prototype.toString.call(10)  // '[object Number]'
  Object.prototype.toString.call(true)  // '[object Boolean]'
  Object.prototype.toString.call(Symbol())  // '[object Symbol]'
  Object.prototype.toString.call(null)  // '[object Null]'
  Object.prototype.toString.call(undefined)  // '[object Undefined]'
  Object.prototype.toString.call(new Date())  // '[object Date]'
  Object.prototype.toString.call(Math)  // '[object Math]'
  Object.prototype.toString.call(new Set())  // '[object Set]'
  Object.prototype.toString.call(new weakSet)  // '[object weakSet]'
  Object.prototype.toString.call(new Map())  // '[object MAp]'
  Object.prototype.toString.call(new WeakMap)  // '[object WeakMap]'
  ```
  原理：
  - 依托Object.prototype.toString()方法得到的对象内部属性[[Class]]
  - 对于原始类型的数据进行了包装
  - 区别null undefined 是内部做了处理
  ```
  // 封装的获取变量类型的方法 Array Object Function String Boolean Undefined Null ...
  function type(data) {
    let toString = Object.prototype.toString;
    let dataType = toString
          .call(data)
          .replace(/\[object\s(.+)\]/, "$1")
          .toLowerCase()
    return dataType
  }
  ```
****
- Array.isArray()
  判断是否是数组
  ES5.1推出，IE6～8 不支持
  ```
  if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
  }
  ```

## call apply bind
- call
- apply
- bind