# 包

## 环境变量
- GOROOT="/usr/local/go"  # Go开发包目录
- GOPATH="/home/davy/go"  # 工程目录

## 创建

## 引用
### 全路径｜相对路径
包的绝对路径就是“$GOROOT/src 或 $GOPATH/src”后面包的源码的全路径
```
import "lab/a"
import "../a"
```
### 引用格式
```
import "fmt"  // 标准引用
fmt.Println("xxx")

import F "fmt"  // 别名引用
F.Println("xxx")

import . "fmt"  // 命名空间合并，引用
Println("xxx")  // 直接使用

import _ "fmt"  //匿名导包，会执行包初始化 init 函数
```
### 导入多个包
```
import "./a"
import . "./b"
```
```
import (
  "./a"
  . "./b"  // 合并命名空间
  Casd "./c"  // 重命名
)
```

## 包的结构
小写开头的是内部变量｜函数，包外不可使用
大写开头的是包外可使用的变量｜函数

## 导包的机制
- 环形引用会报错，程序的执行是无环的，单向的
- 包引用关系：main→A→B→C，那么这些包的 init() 函数调用顺序为：C.init→B.init→A.init→main
