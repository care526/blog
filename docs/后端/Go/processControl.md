# go流程控制

## if else
```
var ten int = 11
if ten > 10 {
  // XXX
} else if ten < 5 {
  // XXX
} else {
  // XXX
}
```
```
if ten := 10; ten > 10 {}
```
## for
```
for i := 0; i < 10; i++ {  // 初始语句可以不写，但是后面的分号(;)必须写
    sum += i
}
```
```
for {}  // 无限循环，在循环体中使用break来跳出
```
## switch case
```
var a = "hello"
switch a {
  case "hello":
    fmt.PrintLn(1)
  case "world" , "care":
    // XXX
  default:
    // XXX
}
```
```
switch {
  case r > 10
    // XXX
}
```

## goto
```
goto onExit  // 跳转到指定的标签，可以用来跳出多层的循环和处理错误
onExit:
  // XXX
```

## break
```
// 跳出后结束循环
OuterLoop1:
 for i := 0; i < 2; i++{
   OuterLoop2:
    for j := 0; j < 5; j++ {
      // XXX
      break OuterLoop1  // 跳出两层循环
      break OuterLoop2  // 跳出循环到OuterLoop2位置
    }
 }
```

## continue
```
// 结束该次循环的一次，开始下一次
OuterLoop1:
 for i := 0; i < 2; i++{
   OuterLoop2:
    for j := 0; j < 5; j++ {
      // XXX
      continue OuterLoop1  // 跳出两层循环
      continue OuterLoop2  // 跳出循环到OuterLoop2位置
    }
 }
```