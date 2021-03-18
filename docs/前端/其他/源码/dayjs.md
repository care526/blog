# dayjs
JS日期时间处理库

## 核心源码
```js
// 对外导出的核心对象(函数的本质是对象)
const dayjs = function(date, c) {
    const cfg = typeof c === 'object' ? c : {}
    return new Dayjs(cfg)
}

// 核心类
class Dayjs {
    constructor(cfg) {}
}

// 指定dayjs的原型为Dayjs的原型
// 后面的扩展本质都是挂载在Dayjs.prototype上的  
const proto = Dayjs.prototype
dayjs.prototype = proto;

// 用于扩展的继承函数
dayjs.extend = (plugin, option) => {
  plugin(option, Dayjs, dayjs)
  return dayjs  // 这里也是一个链式调用的基础
}

export default dayjs
```
库导出了一个函数  
函数上挂载了其他属性  

## 扩展示例
weekYear扩展
```js
export default (option, Dayjs, dayjs) => {
  const proto = Dayjs.prototype
  // 在Dayjs.prototype上扩展
  proto.weekYear = function () {}
}
```
使用
```js
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
```