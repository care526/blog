# 变量

## 声明
```rust
// 编译器自动识别类型
let a = 5
// 指定类型，建议使用
let b: i32 = 6
// 声明可变变量
// 对上面的变量再赋值，会报错
let mut x = 5;
// 常量
const MAX: i32 = 10
```

****
## 类型
### 标量类型
  1. 有符号整型: i8 i16 i32 i64 i128  
  2. 无符号整型: u8 u16 u32 u64 u128
  3. 浮点型: f32 f64
  4. 布尔: bool
  5. 字符: char
### 复合类型
  1. 元组
  2. 数组
### 元组
元组长度固定：一旦声 明，其长度不会增大或缩小  
```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
let a = tup.0;  // 使用
```
### 数组  
数组中的每个元素的类型必须相同  
访问越界的数组元素会报错
```rust
let arr = [1, 2, 3, 4, 5];
let arr: [i32; 5] = [1, 2, 3, 4, 5];
let a = [3; 5];  // 五个都是3的元素
// 使用
let first = arr[1];
```
#### 结构体
```rust
// 定义
struct User {
	username: String,
	email: String,
	sign_in_count: u64,
	active: bool,
}
// 元组结构体，任何结构体都不相同，即使元素都一样
struct Color(i32, i32, i32);
```
```rust
// 实例化
let user1 = User {
	email: String::from("someone@example.com"),
	username: String::from("someusername123"),
	active: true,
	sign_in_count: 1,
};
// 可变的结构体实例，不能设置单个结构体元素可变
let mut user1 = User {
	email: String::from("someone@example.com"),
	username: String::from("someusername123"),
	active: true,
	sign_in_count: 1,
};
// 使用结构体元素
user1.email = String::from("anotheremail@example.com");
// 其他未指定元素的数据使用user1的
let user2 = User {
	email: String::from("another@example.com"),
	username: String::from("anotherusername567"),
	..user1
};
```

****
## 解构
```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
let (x, y, z) = tup;
```

****
## 所有权
### 管理程序所用内存的方式
- 程序运行时不断地寻找不再使用的内存，GC(垃圾回收)  
  java
- 亲自分配和释放内存  
  C++
- 所有权系统管理内存  
  rust