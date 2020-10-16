# rust函数

## 程序的入口函数
```rust
fn main() {}
```
****

## 声明 fn
```rust
fn another_function() {
    println!("Another function.");
}
```

## 使用
```rust
another_function();
```

## 函数参数
```rust
fn another_function(x: i32, y: i32) -> i32 {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
    x + 1
}
```



表达式 后面没有; 返回最后一个表达式
语句 后面有;
