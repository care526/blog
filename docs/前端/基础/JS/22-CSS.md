# CSS接口

## supports
是否支持该css，返回一个boolean  
`CSS.supports(propertyName, value);`
propertyName: 属性名称  
value: 属性值  
```js
CSS.supports("display", "flex");  // true
```
`CSS.supports(supportCondition);`
```js
CSS.supports("display: flex");  // true
```

  