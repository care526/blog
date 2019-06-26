## new Number()
Number构造函数

## Number(value)
接受一个参数，返回数值或者NaN   
value 为只包含数字的字符串时，返回同等的数字   
value 为其他时，返回NaN 

## tostring()
将数字转化为字符串

## toFixed(value)
将数值转化为指定长度的数字的字符串   
接受一个参数，表示保留的小数位数。没有参数，默认为0  
```
3.1415926.toFixed(3);  //3.141
```

## parseInt(value, num)   
返回一个数值或NaN  
value：接受数值或字符串  
num：待转换的进制  
[具体的例子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

## parseFloat(value)    
返回一个浮点数或NaN   
value：待转换的变量  
[具体的例子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

## isNaN(value)
检测参数是否是非数值，不是数值或不能转换为数值返回true，否则返回false

检测一个值是否等于NaN
利用NaN和任何值都不相等，包括自己的特性
```
var a = 0;
console.log(a === a); //true
var b = NaN;
console.log(b === b); //false
```