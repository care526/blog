## mysql的连接与断开
- 连接
  ```
  mysql -u user -p  # 然后再输入密码
  mysql -u user -p basedataName  # 同上并指定待连接的数据库
  mysql -h host -u user -p basedataName  # 同上如果要连接的数据库不在本机上，如果是可以省略 -h host
  ```
- 断开
  `quit` or `ctrl D  # 快捷键`

## 命令
- 创建数据库
  `create database dataName;`
- 选择数据库
  `use dataName;`
- 当前数据库存在的表
  `show tables;`
- 新建表
  ```
  CREATE TABLE pet (name VAECHAR(20), owner VARCHAR(20), sex CHAR(1), birth DATE, death DATE)  # 新建pet表，项是name/owner/sex/birth/death
  ```
- 显示表的项和项的属性
  `describe tableName;`

## 其他
- SQL关键字总是大写，以示突出，表名和列名均使用小写
- 每一条的命令都是分号(;)结束