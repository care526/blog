# mysql

## 客户端
- 连接
  ```bash
  mysql -u user -p  # 然后再输入密码
  mysql -u user -ppassword  # password密码也可以直接写出来，但是和-p之间不能有空格
  # 同上如果要连接的数据库不在本机上，如果是可以省略 -h **host**
  # 端口默认是3306
  mysql -h localhost -P 3306 -u user -ppassword  
  ```
- 断开
  `quit` or `ctrl c  # 快捷键` or `exit`

## 数据库
ps: information_schema、mysql、performance_schema和sys是系统库  
- 创建数据库  
  `create database dataName;`
- 查询当前服务器存在的数据库  
  `show databases;`
- 选择数据库  
  `use dataName;`
- 当前数据库存在的表  
  `show tables;`


## 表
- 新建表
  ```sql
  CREATE TABLE pet (
    name VARCHAR(20),
    owner VARCHAR(20),
    sex CHAR(1),
    birth DATE,
    death DATE
  );  # 新建pet表，项是name/owner/sex/birth/death
  ```
- 显示表的项和项的属性  
  `describe tableName;`
  `desc tableName;`
- 删除表
  ｀drop table tableName;｀

## 支持的数据
- 数值类型
  | 类型 | 大小(bytes) | 范围(有符号) | 范围(无符号) | 用途 |
  |:--|:--:|:--:|:--:|--:|
  | TINYINT | 1 | -128 ~ 127 | 0 ~ 255 | 小整数值 |
  | SMALLINT | 2 | -32768 ~ 32767 | 0 ~ 65535 | 大整数值 |
  | MEDIUMINT | 3 | -8388608 ~ 8388607 | 0 ~ 16777215 | 大整数值 |
  | INT | 4 | -2147483648 ~ 2147483647 | 0 ~ 4294967295 | 大整数值 |
  | BIGINT | 8 | -9223372036854775808 ~ 9223372036854775807) | 0 ~ 18446744073709551615 | 小整数值 |
  | FLOAT | 4 | ~ | ~ | 单精度浮点数值 |
  | DOUBLE | 8 | ~ | ~ | 双精度浮点数值 |

- 日期
  | 类型 | 大小(bytes) | 范围 | 格式 | 用途 |
  |:--|:--:|:--:|:--:|--:|
  | DATE | 3 | 1000-01-01/9999-12-31 | YYYY-MM-DD | 日期值 |
  | TIME| 3 | '-838:59:59'/'838:59:59' | HH:MM:SS|时间值或持续时间|
  | YEAR | 1 | 1901/2155 | YYYY | 年份值 |
  | DATETIME | 8 | 1000-01-01 00:00:00/9999-12-31 23:59:59 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值 |
  | TIMESTAMP | 4 | 1970-01-01 00:00:00/2038 | YYYYMMDD HHMMSS | 混合日期和时间值，时间戳 |

- 字符串
  | 类型 | 大小(bytes) | 用途 |
  |:--|:--|:--|
  | CHAR | 255 | 定长字符串|
  | VARCHAR | 65535 | 变长字符串|
  | TINYBLOB | 255 | 不超过 255 个字符的二进制字符串|
  | TINYTEXT | 255 | 短文本字符串|
  | BLOB | 65535 | 二进制形式的长文本数据|
  | TEXT | 65535 | 长文本数据|
  | MEDIUMBLOB | 16777215 | 二进制形式的中等长度文本数据|
  | MEDIUMTEXT | 16777215 | 中等长度文本数据|
  | LONGBLOB | 4294967295 | 二进制形式的极大文本数据|
  | LONGTEXT | 4294967295 | 极大文本数据|

## 增
- 表  
  1. 添加多行数据 -> 使用将文本的内容导入的方式  
  2. 单行数据的添加  
      `INSERT INTO pet VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);`
      ```sql
      INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
      INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...), (值1, 值2, ...);
      # 字段的顺序和表的顺序可以不一样，但是值的顺序必须要和字段的顺序一样，下面是例子
      INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);
      INSERT INTO students (class_id, name, gender, score) VALUES (1, '大宝', 'M', 87), (2, '二宝', 'M', 81);
     ```

## 删
```sql
DELETE FROM <表名> WHERE ...;
DELETE FROM students WHERE id=1;
```
- 可以一次删除多条记录  
- 如果没有匹配到任务语句，不会报错也不会删除任何东西  
- 当没有WHERE的时候，整个表的记录都会删除  
- 每当删除成功后，或者没有需要删除的时候，也会有提示  

## 改
```sql
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
UPDATE students SET name='大牛', score=66 WHERE id=1;
```
- score=score+10 可以使用表达式  
- 可以没有UPDATE的的WHERE条件，那么整个表都会被改变，最好是先用SElECT语句来测试是否筛选得到了期望的记录，再改变

## 查
```sql
SELECT * FROM <表名>;
SELECT * FROM <表名> WHERE <条件表达式>;
SELECT * FROM <表名> WHERE <条件表达式> AND <条件表达式>;
SELECT * FROM <表名> WHERE <条件表达式> OR <条件表达式>;
SELECT * FROM <表名> WHERE NOT <条件表达式>;  # 条件运算按照NOT、AND、OR的优先级进行，加上括号可以改变他的优先级
SELECT id, score FROM students;  # 只显示id和score列，表的部分列，列的顺序可以不和原表一致

SELECT id, name, gender, score FROM students ORDER BY score;  # 排序按照score的数据从低到高排列
SELECT id, name, gender, score FROM students ORDER BY score DESC;  # 同上，只不过是数据从高到低
SELECT id, name, gender, score FROM students ORDER BY score DESC, gender;
# 同上如果score的默认的排序规则是ASC：“升序”，即从小到大。ASC可以省略，即ORDER BY score ASC和ORDER BY score效果一样
# 如果有WHERE子句，那么ORDER BY子句要放到WHERE子句后面
```
LIMIT 4 OFFSET 8; 将查询的结果以4个为一页进行分页，并从第9项开始显示数据 OFFSET的索引是从0开始的  
OFFSET是可选的，如果只写LIMIT 15，那么相当于LIMIT 15 OFFSET 0
在MySQL中，LIMIT 15 OFFSET 30还可以简写成LIMIT 30, 15

## 聚合函数和聚合查询
```sql
# 查看数据的总数
SELECT COUNT(*) .....  # 得到的结果还是一个二维表，列名为COUNT(*)
SELECT COUNT(*) num ......  # 设置一个别名num
```
- SUN 计算合计值，所有的数据都要是数值类型  
- AVG 计算平局值，所有的数据都要是数值类型  
- MAX 计算最大值  
- MIN 计算最小值  

> 1. MAX()和MIN()函数并不限于数值类型，如果是字符类型，MAX()和MIN()会返回排序最后和排序最前的字符  
> 2. 如果聚合查询的WHERE条件没有匹配到任何行，COUNT()会返回0，而SUM()、AVG()、MAX()和MIN()会返回NULL  
***
```sql
SELECT class_id, COUNT(*) num FROM students GROUP BY class_id;
# 多个列进行分组
SELECT class_id, gender, COUNT(*) num FROM students GROUP BY class_id, gender;
```

## 建议
- 存在线的资源的时候，如七牛上的图片，可以把域名去掉，使用的时候再拼上  
- 逻辑删除，用一个字段保存该条信息的状态，删除的时候改变状态即可，不需要真的将数据从表中去除  
- SQL关键字总是大写，以示突出，表名和列名均使用小写  
- 每一条的命令都是分号(;)结束，如果在分号前回车，shell会保存之前的命令，接着打就好了，只有几个命令是不用分号结尾的　　