# mysql

## 客户端
- 连接
  ```bash
  mysql -u user -p  # 然后再输入密码
  mysql -u user -p basedataName  # 同上并指定待连接的数据库
  mysql -h host -u user -p basedataName  # 同上如果要连接的数据库不在本机上，如果是可以省略 -h **host**
  ```
- 断开
  `quit` or `ctrl D  # 快捷键`

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
  ```bash
  CREATE TABLE pet (name VAECHAR(20), owner VARCHAR(20), sex CHAR(1), birth DATE, death DATE)  # 新建pet表，项是name/owner/sex/birth/death
  ```
- 显示表的项和项的属性  
  `describe tableName;`

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