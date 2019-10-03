```
1、概述
是一种新的数据类型，表示独一无二的值
通过 Symbol 函数生成，前面不加 new
let s = Symbol(); typeof s // "symbol"
Symbol（参数） 接收一个参数，表示对当前Symbol值的描述
let s = Symbol("foo"); typeof s // "symbol(foo)"
只能转化为字符串和布尔值
let s = Symbol("foo") s.toString(); // "symbol(foo)"
!s // false
2、作为属性名
三种写法
var mySymbol = Symbol();
//第一种
var a = {};
a[mySymbol] = ''hello'';
//第二种
var a = {
[mySymbol]："hello";
}
注意，Symbol值作对象的属性名时，不能用点运算符，必须用括号 []
用于定义常量，变量的时候，每个都是不相同的
3、消除魔术字符串
魔术字符串：在程序中多次出现的一个字符串，最好将这个字符串用一个语义化的变量保存
变量的值等于什么不重要 var 变量 = Symbol();
4、属性名的遍历
Symbol作为属性名，不会出现在for...in，for...of循环中，也不会被Object.keys()、Object.getOwnPropetyNames()返回，但是它不是私有属性
Object.getOwnPropetySymbols()方法返回一个数组，成员是当前对象所有用于属性名的Symbol值
利用这个特性，可以为对象定义一些非私有的，用于内部的方法
5、Symbol.for() Symbol.keyFor()
Symbol.for(参数) 在全局环境中搜索，如果有，返回该Symbol值，若没有，返回一个新建的值
Symbol.for(Symbol值) 返回已登记的Symbol类型值的key （已登记：用Symbol.for()生成的）
var s1 = Symbol("foo"); Symbol.keyFor(s1) // undefined
var s2 = Symbol("foo"); Symbol.keyFor(s2) // foo
```