# 基础数据

## 变量的基本类型
- bool
- string
- 有符号整数：int int8 int16 int32(也叫rune) int64
- 无符号整数：uint uint8(也叫byte) uint16 uint32 uint64 uintptr
- 浮点数：float32 float64
- 复数：complex64 complex128

## 变量的声明
```go
var a  // 不指定类型，赋值的时候自动识别
var b int  // 指定为int类型 (标准格式)
var c *int  // 指定为int型指针
```
```go
var (  // 多个申明
  a
  b int
)
```
```
i := 0  // 简短格式，广泛用于局部变量的初始化
i j := 0, 1  // 简短定义多个
// 定义同时初始化，只能用于函数内部，不指定类型
// 定义初始化的变量会报错
```

## 变量的初始化
```go
var a int = 1  // 标准初始化
var b = 0  // 编译器自动推导类型
c := 9  // 短声明初始化
```

## 匿名变量(空白标识符)
```go
func care() (int, int) { return 100, 200 }
a, _ := care()
```

## 变量的作用域
- 全局变量
- 局部变量(在函数中声明的)，参数和返回值也是局部变量