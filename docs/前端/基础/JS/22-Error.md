# Error

## RangeError
> 数值超出相应的范围
- RangeError: Maximum call stack size exceeded  
  超出了最大的堆栈大小  
  ```js
	function pow(x, n) {
		return x * pow(x, n - 1);
	}
	pow(10,5)
  ```

## ReferenceError
> 引用类型错误
> 当一个不存在的变量被引用时发生的错误
- ReferenceError: "x" is not defined
  “x”未定义
	```js
	console.log(x)
	```

## SyntaxError
> 语法错误
- SyntaxError: Identifier 'x' has already been declared
  标识符已申明
	```js
	let a = 0;
	let a = 2;
	```
- SyntaxError: Invalid or unexpected token
  捕获无效或意外的标记
	```js
	let colors = ['#000', #333', '#666'];
	``` 
- SyntaxError: Unexpected end of input

## TypeError
> 类型错误
- TypeError: Cannot read property 'x' of undefined
  无法读取属性‘x’
- TypeError: Cannot set property 'x' of undefined
  无法设置属性 'x'