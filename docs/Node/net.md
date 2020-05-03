# net

## 引入模块
`const net = require('net');`

## net.Server
close connection error listening

- ### server.address()
  返回ip地址
- server.close([callback])
  停止server服务。是异步的，当还有连接存在时，所有的连接关闭时，才会关闭服务
- server.getConnections((err, count) => {})
  异步获取服务器的当前的并发数
- server.listen()
- server.listening
  是一个bool值，表示server是否正在监听
- server.maxConnections
  设置该属性使当连接数过多时拒接连接


## net.Socket