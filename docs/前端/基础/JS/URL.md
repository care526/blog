# URL

```ts
const searchParams = new URL('http://www.baidu.com?a=123&a=456').searchParams;
```

- href
- origin
- protocol
- port
- host
- hostname
- pathname
- search
- hash
- username
- password
- searchParams

## searchParams
处理search区域的数据
- has
  是否有某个query属性
  ```ts
  searchParams.has('a'); // true
  ```
- get
  获取某个query属性
  ```ts
  searchParams.get('a'); // 123
  ```
- getAll
  获取全部query属性(数组)
  ```ts
  searchParams.getAll('a'); // [123, 456]
  ```
- append
  添加新的query属性
  ```ts
  searchParams.append('c', '789');
  ```
- set
  设置query属性
  ```ts
  searchParams.set('c', 'asd'); // true
  ```
- delete
  删除query属性
  ```ts
  searchParams.delete('c');
  ```
- toString
  全部query属性转字符串
  ```ts
  searchParams.toString(); // a=123&a=456
  ```

