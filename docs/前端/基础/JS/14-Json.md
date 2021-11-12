# JSON

## JSON.parse(value) 
value：字符串  
返回一个json对象

## JSON.stringify(value, replacer)
- value：对象  
- replacer: 函数或数组  
          如果是函数，则判断每个属性  
          如果是数组(字符串)，则序列化的时候只保留数组中的属性  

返回一个json格式的字符串  
缺点：属性值为undefeated、function、Symbol 在对象中会丢失，在数组中转化为null     

[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
