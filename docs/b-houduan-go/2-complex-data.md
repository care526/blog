# 复合数据

## 数组
****


## 切片(slice)
****


## Map
****


## 结构体
### 定义
```go
type Employee struct {
    ID        int
    Name      string
    Address   string
    DoB       time.Time
    Position  string
    Salary    int
    ManagerID int
}
```
### 使用
```go
var dilbert Employee
// 直接赋值
dilbert.Salary = 5000
// 取地址访问
position := &dilbert.Position
*position = "Senior " + *position

var employeeOfTheMonth *Employee = &dilbert
employeeOfTheMonth.Position += " (proactive team player)"
```
****


## JSON
****