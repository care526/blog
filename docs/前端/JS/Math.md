# Math

### abs(num) <返回数值>
返回数的绝对值
```js
Math.abs(-1) // 1
```

### ceil(num) <返回数值>
对数值向上取整
```js
Math.ceil(1.2)  // 2
Math.ceil(-1.5)  // -1
```

### floor(num) <返回数值>
对数值向下取整
```js
Math.floor(1.2)  // 1
Math.floor(-1.5)  // -2
```

### round(num) <返回数值>
对数值四舍五入取整
```js
Math.round(1.2)  // 1
Math.round(1.5)  // 2
```

### max(num1, num2) <返回数值>
返回最大值
```js
Math.max(1, 2)  // 2
```

### min(num1, num2) <返回数值>
返回最小值
```js
Math.min(1, 2)  // 1
```

### pow(num1, num2) <返回数值>
返回num1的num2次幂
```js
Math.pow(10, 3)  // 1000
```

### random(num) <返回数值>
返回0 ~ 1之间的随机数
```js
Math.random()  // 0.9394199008648998
Math.floor(Math.random() * 1000)  // 1000以内的随机数
```