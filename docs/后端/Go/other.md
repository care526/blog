# other

## 注释
// 我是单行注释
/* 我是多行注释 */

## 类型
int 数值
string 字符串
float32 32位浮点切片
struct 结构体
func() bool 一个返回值为布尔的函数

## 变量
### 类型
bool
string  默认为''
int  int8  int16  int32(rune)  int64  默认为0
uint  uint8(byte)  uint16  uint32  uint64  uintptr  默认为0
float32  float64  默认为0.0
complex64  complex128  
### 声明 / 赋值
在声明变量的时候可以加上类型也可以不加,变量在申明的时候都被Go初始化了
```
var care = 1  // 数值
var care = "string"  // 字符串
var care int = 1  // 数值
var care string = "string"  // 字符串
care := 1  // 数值 (简便写法,只能对于未申明的变量)
care := "string"  // 字符串
// var后面的()里声明多个变量
var (
  crae int = 1
  crae string = "asd"
)
```
_ 匿名变量

## 常量


## 函数


## 流程控制
```
if XXX {
  XXX
} else if XXX {
  XXX
} else {
  XXX
}
```
```
if XXX; XXX {  // 可以在判断的表达式的前面加一个语句
    XXX
}
```
```
for ; step > 0; step-- {
  XXX
}
```
```
for {
  XXX  // 在代码里面做判断,用break跳出
}
```
```
for i <= 10 {
  XXX
}
```
```
switch a {  // a是变量
case "hello":
    XXX
case "world":
    XXX
default:
    XXX
}
```
```
switch a {  // 一支多值
case "mum", "daddy":
  XXX
}
```