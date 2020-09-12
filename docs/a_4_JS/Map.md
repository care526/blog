# Map

## 定义
Map是一个纯哈希结构  
Map 在频繁增删键值对的场景下表现更好，性能更高  
因此当你需要频繁操作数据的时候也可以优先考虑 Map

## 声明
```js
const map = new Map()
map.set('key', 'value')
map.get('key')  // 'value'
```
```js
new Map([
  [1, '1']
])
```
key: 接受任何类型的键  
除了NaN比较特殊外，其他「Map」的get方法都是通过对比键名是否相（===）来获取，不相等则返回undefined  

## 迭代
顺序是按照插入的顺序返回的
```js
map.forEach((value, key) => {
  console.log(key, value)
})
// key1 value1
// key2 value2
// key3 value3
for(const entry of map) {
  console.log(entry)
}
// ["key1", "value1"]
// ["key2", "value2"]
// ["key3", "value3"]
```

## 属性
### constructor
返回函数，创建实例的原型，默认为Map函数
## size
Map对象中键值对数量

## 方法
### clear
移除所有键值对
### delete
移除指定的key  
如果有移除并返回true
如果没有返回false
### forEach
迭代
### get
返回键名对应的键值，不存在返回undefined
### set
设置Map的键值对，返回该Map对象
### has
返回boolean，是否包含对应的键值
### entries
返回新的Iterator对象，按插入顺序包含Map对象中每个元素的[key, value]
### values
返回新的Iterator对象，按插入顺序包含Map对象中每个键值

## 转JSON
转不了，一直是"{}"，不管map有没有键值对
```JS
JSON.stringify(map)  // '{}'
```