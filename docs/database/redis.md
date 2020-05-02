# redis

## redis的使用场景
- cookie
- session
- 权鉴
- 一次性的信息
- 访问量大的数据，甚至整个页面

## 文件
- ./redis-server
  启动redis服务
- ./redis-cli
  进入redis客户端

## 命令
- 关闭redis服务
  shutdown
- 公共命令
  ```
  del mystr  # 删除key
  keys *  # 获取所有的key
  selete n  # 选择第n个库
  move key n  # 将某个key移动到第n个库，如果有的话，就不能移动
  flush db  # 清除指定库 ？？？？？
  type key  # 输出key的类型
  randmkey  # 随机key ？？？？？
  exists key  # 判断key是否存在
  expire key n  # 设置key n秒过期
  pexpire key n  # 设置key n毫秒过期
  persist key  # 删除key的过期时间
  ```

## 五种数据结构
- strings 字符串
  ```
  set mystr “hello world!”  # 设置字符串
  set mystr  # 获取指定key对应的字符串
  mset
  mget
  append mystr "val"  # 将mystr的后面追加val这个字符串
  getrange mystr 0 1  # 获取mystr字符串的第0位到第1位的所有字符子串(包括end位)
  setrange mystr 2 zzz  # 将mystr的从2位开始到后面的子串替换为zzz(如果不够长，中间的数据会被\x00替代)
  getbit
  setbit
  bitcount
  bitop
  ```
- lists 字符串列表
  ```
  lpush mystrs  # 从左边推入元素
  rpush mystrs  # 从右边推入元素
  lpop mystrs  # 从左边弹出元素
  rpop mystrs  # 从右边弹出元素
  lindex mystrs n  # 获取指定位置的元素(索引从0开始)
  lrange mystrs n m  # 获取从n到m范围的元素列表(索引从0开始)
  ltrim mystrs n m  # 只保留从n开始到m位置的列表(包括n,m)
  blpop
  brpop
  rpoplpush
  brpoplpush
  ```
- sets 字符串集合
  ```
  sadd care 1  # 添加元素到care这个字符串中
  srem care 1  # 从集合中删除元素
  smembers care  # 显示所有元素
  sismember care 1  # 查看指定值是否存在集合中(有返回1，没有返回0)
  scard
  srandmember
  spop
  smove
  sdiff
  sdiffstore
  sinter
  sinterstore
  sunion
  sunionstore
  ```
- sorted sets 有序字符串集合
  ```
  zadd care 10 care10  # 添加care10元素，分值为10
  zadd care 20 care20  # 添加care20元素，分值为20
  zrange care 0 -1 withscores  # 获取所有元素
  zrangebyscore care 9 11 withscores  # 获取分值在9到11之间到元素s
  zrem care care20  # 删除care20这个元素
  zcard
  zincrby
  zcount
  zrank
  zscore
  zrange
  zrevrank
  zrevrange
  zrangebyscore
  zrevrangebyscore
  zremrangebyrank
  zremrangebyscore
  zinterstore
  zunionstore
  ```
- hashes 哈希
  ```
  hset care care1 1  # 设置哈希care的care1键对应的值为1
  hset care care2 2  # 设置哈希care的care2键对应的值为2
  hdel care care1  # 删除哈希care的键care1
  hgetall care  # 打印哈希care的所有键值对
  hmget
  hmset
  hdel
  hlen
  hexists
  hkeys
  hvals
  hgetall
  hincrby
  hincrbyfloat
  ```

## 配置文件
- 

## 几种集群方式
- 主从模式
  主只写操作，从负责读操作，同时同步主的数据
- 哨兵模式
  同主从模式，但是从会在主挂掉的时候，立即接替主的工作，保证健壮性
- 集群模式
  各自保存相应的数据，内部使用二进制协议优化传输速度。访问节点上没有的据时，实际上访问的是其他节点的数据。

## 其他
key值太长，降低查找效率
key值太短，可读性低


数据结构 增删改查
主从模式
持久化 两种模式