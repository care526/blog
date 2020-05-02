# 结构体

## 定义
```
type Point struct {
    X int
    Y int
    R, G, B byte // 同类型的变量可以写在一行
}
```

## 实例化
```
var p Point
p.X = 10
```
```
p := new(Point) // p的类型属于指针，*Point
p.X = 10
// 以下代码同上
p := &Point{}
p.X = 10
```
```
// 使用键值对初始化结构体
ins := Point {
  name: "care",
  height: 173
}
```
ps: 结构体内部的结构体只能是指针类型
```
// 匿名结构体的初始化
msg := &struct {
  id int,
  data string
} { // 初始化部分
  1024，
  "hello"
}
```
