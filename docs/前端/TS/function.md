# ts函数

### 定义
```
// 普通函数
function add(x: number, y: number): number {
    return x + y;
}
// 匿名函数
let myAdd = function(x: number, y: number): number { return x + y; };
```

### 可选参数
```
// 在参数的后面加上 ?  给y传undefined，也是等于没传
function add(x: number, y?: number): number {
    return x + y;
}
```

### 默认参数
```
// 默认参数也属于可选参数，y的类型number也可以省略
function add(x: number, y: number = 1): number {
    return x + y;
}
```

### 剩余参数
```
// 将不知道传入数量的变量搜集进剩余参数中，在函数中使用
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```

### this