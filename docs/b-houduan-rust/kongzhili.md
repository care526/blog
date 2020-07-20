# 控制流

## if
if的条件必须是一个bool值，否则会报错  
```rust
if number < 5 {
    println!("1");
} else id number < 7 {
    println!("2");
} else {
    println!("3");
}
```
```rust
// 代码块的值是其最后一个表达式的值
// 代码块中的表达式的类型必须是一样的
let number = if condition {
    5
} else {
    6
};
```

## loop
// 无限循环
// 使用break来中断程序，后面跟的是返回值
```rust
let result = loop {
    println!("again!");
    break 1;
}
```

## while
```rust
let mut number = 3;
while number != 0 {
    println!("{}!", number);
    number = number - 1;
}
```
## for
```rust
let a = [10, 20, 30, 40, 50];
// iter是数组a的一个迭代器
for element in a.iter() {
    println!("the value is: {}", element);
}
```