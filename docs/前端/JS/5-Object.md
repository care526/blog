# Object

## 键
只接收两种类型的键名 String 和 Symbol  
对象/正则无法用作键名，会报错  
使用其他类型的键名，但是最终 JavaScript 都会隐式转换为字符串   
如Object会被转成 [object Object]    

### Object.create(proto,descriptors) <返回一个新对象>
使用指定对象来创建一个对象（可用于继承）  
proto是要继承的对象，也可以是null，返回一个继承Object的对象  
descriptors是可选的，添加自有的属性，这个参数是个对象，会让返回的新对象拥有这个对象的所有属性。  

### Object.defineProperty(o,name,descriptors) <返回对象o，改变了原对象o>
创建或配置对象的一个属性（没有就创建，有就配置改写）  
o：对象  
name：对象的属性名  
descriptors：属性描述符对象(没有指定的属性，对应的属性值将设置为false或null)  
Object.defineProperty(people, age, {    
value: v, writable: false, enumerable: true, configurable: false  
//值 可读写 可枚举 可配置  
})  
Object.defineProperty(people,age,{  
  get: function () {} | undefined, //当设置了get/set方法时，value和writable不能使用  
  set: function () {} | undefined,   
  enumerable: true,   
  configurable: false  
})  

### Object.defineProperties(o,descriptors) <返回对象o，改变了原对象o>
创建或配置对象的多个属性（没有就创建，有就配置改写）  
详情同Object.defineProperty方法，但可配置多个属性  
Object.defineProperties(people,{  
x: { value: v, writable: false, enumerable: true, configurable: false }  
y: { value: v, writable: false, enumerable: true, configurable: false }  
//值 可读写 可枚举 可配置  
})  

### Object.freeze(o) <返回对象o，改变了原对象o>  
将一个对象设置为不可改变的  
这意味着不能向对象o添加新属性，同时已有的属性不能设置或删除。一旦冻结，就不能解冻。  
Object.isFrozen(o) <返回bool，不改变原对象o>  
检测对象是否可改变，没冻结返回true，冻结了返回false  
ps：冻结对象的两种方法  
1，将对象传入Object.freeze()  
2，将对象传入Object.preventExtensions()，设为不可扩展。再用Object.defineProperty()将它所有的属性设置为只读且不可删除的。  

### Object.seal(o) <返回对象o，改变了原对象o>  
阻止添加或删除对象的属性（封闭对象，不可解封）  
ps：与freeze不同的是，对象的属性值可以修改  

### Object.isseal(o) <返回bool，不改变原对象o>    
判断一个对象的属性是否可以添加或删除，返回 true / false  

### Object.getOwnPropertyDescriptor(o,name) <返回描述符对象，不改变原对象o>  
name：对象的一个属性名，也可以是数组的索引  
查询对象的一个属性的特性，返回该属性的描述符对象。若属性不存在，返回undefined  

### Object.getOwnPropertyNames(o) <返回数组，不改变原对象o>  
一个包含对象o的所有非继承属性的名字的数组，包括对象的不可枚举的属性  
Object.getPropertypeOf(o) <返回一个对象，不改变原对象o>  
返回一个对象的原型  
ps：继承自Object对象的对象的原型是Object.prototype  

### Object.hasOwnProperty(propname) <返回bool，不改变原对象o>  
检查对象的一个属性是否是继承的，没有这个属性就返回false  
propname：对象属性名的字符串  
people.hasOwnProperty("age"); // true  

### Object.preventExtensible(o) <返回对象o，改变了原对象o>  
禁止在对象上添加新的属性（但是不影响原型链，可以获得新的继承属性）  
一旦设置为不可扩展的，就不能改为可扩展的了  

### Object.isExtensible(o) <返回bool，不改变原对象o>  
判断对象上是否可以添加新属性，可以返回true，不可以返回false  

### Object.isPrototypeOf(o) <返回bool，不改变原对象o>  
判断当前对象是否为另一个对象的原型  
var o = new Object();  
Object.prototype.isPrototypeOf(o); // true  

### Object.keys(o) <返回数组，不改变原对象o>  
返回对象的自有的可枚举属性名  

### Object.propertylsEnumerable(propname) <返回bool，不改变原对象o>  
检测某个属性是否在 for/in 循环中可见（不检查原型链）  
propname：对象指定属性名的字符串  
ps：那些内置对象的预定义的属性（如方法）通常不可枚举，由JS代码添加的属性是可枚举的  
没有可用于测试继承属性的可枚举型的直接方法  

## 检测是否是对象  
```
obj instanceof Array  // 数组的构造函数
arr.constructor === Object  // 对象的构造函数
Object.prototype.toString.call(obj)  // '[object Object]'
```

## 检测是否是空对象
```
JSON.stringify(obj) === '{}'
Object.getOwnPropertyNames(obj).length === 0
Object.keys(obj).length
```