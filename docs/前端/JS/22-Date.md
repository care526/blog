# Date

# new Date()
获取当前时间对象  
```js
Date()
// Sat Dec 05 2020 16:13:08 GMT+0800 (中国标准时间)
new Date()
// Sat Dec 05 2020 16:13:08 GMT+0800 (中国标准时间)
```

## Date.now()
获取当前的时间戳  
```js
Date.now()  // 1607155871860
+new Date()  // 1607155871860
```

# 获取方法
## getTime()
返回 1970 年 1 月 1 日至今的毫秒数  
```js
time.getTime()  // 1607155871860
```

## getDate()
返回一个月中的某一天  
```js
time.getDate()  // 5
```

## getDay()
返回一周中的某一天 0 ~ 6 (周日 ~ 周六)  
```js
time.getDay()  // 6
```

## getMonth()
返回月份 (0 ~ 11)
```js
time.getMonth()  // 12
```

## getFullYear()
以四位数字返回年份  
```js
time.getFullYear()  // 2020
```

## getHours()
返回 Date 对象的小时 (0 ~ 23)  
```js
time.getHours()  // 16
```

## getHours()
返回 Date 对象的小时 (0 ~ 23)  
```js
time.getHours()  // 16
```

## getMinutes()
返回 Date 对象的分钟 (0 ~ 59)
```js
time.getMinutes()  // 16
```

## getSeconds()
返回 Date 对象的秒数 (0 ~ 59)  
```js
time.getSeconds()  // 32
```

## getMilliseconds()
返回 Date 对象的毫秒(0 ~ 999)  
```js
time.getMilliseconds()  // 600
```

# 设置方法
## setDate()
设置 Date 对象中月的某一天 (1 ~ 31)  
返回设置后时间的时间戳  
```js
time.setDate(2)  // 1606984336600
```

## setMonth()
设置 Date 对象中月份 (0 ~ 11)  
返回设置后时间的时间戳  
```js
time.setMonth(2)  // 1606944336600
```

## setFullYear()
设置 Date 对象中的年份（四位数字）  
返回设置后时间的时间戳  
```js
time.setFullYear(2021)  // 1606944336600
```

## setHours()
设置 Date 对象中的小时 (0 ~ 23)  
返回设置后时间的时间戳  
```js
time.setHours(20)  // 1606944336600
```

## setMinutes()
设置 Date 对象中的分钟 (0 ~ 59)  
返回设置后时间的时间戳  
```js
time.setHours(30)  // 1606944336600
```

## setSeconds()
设置 Date 对象中的秒钟 (0 ~ 59)
返回设置后时间的时间戳  
```js
time.setSeconds(30)  // 1606944336600
```

## setMilliseconds()
设置 Date 对象中的毫秒 (0 ~ 999)
返回设置后时间的时间戳  
```js
time.setMilliseconds(30)  // 1606944336600
```

## setTime()
以毫秒设置 Date 对象  
返回设置后时间的时间戳  
```js
time.setTime(1606944336600)  // 1606944336600
```

# 转换
## toString()
转字符串
```js
time.toString()
// "Fri Apr 03 2020 16:32:16 GMT+0800 (中国标准时间)"
```

## toString()
时间部分转换为字符串。
```js
time.toTimeString()
// "16:32:16 GMT+0800 (中国标准时间)"
```

## toString()
日期部分转换为字符串。
```js
time.toDateString()
// "Fri Apr 03 2020"
```