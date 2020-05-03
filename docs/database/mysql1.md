# mysql1



查询当前服务器存在的数据库
show databases;
如果在分号前回车，shell会保存之前的命令，接着打就好了，只有几个命令是不用分号结尾的




3.3.3将数据记载到表中
添加多行数据 -> 使用将文本的内容导入的方式
一行一行的添加
INSERT INTO pet
VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);

SELECT * FROM <表名>;
SELECT * FROM <表名> WHERE <条件表达式>;
SELECT * FROM <表名> WHERE <条件表达式> AND <条件表达式>;
SELECT * FROM <表名> WHERE <条件表达式> OR <条件表达式>;
SELECT * FROM <表名> WHERE NOT <条件表达式>;  （不常用）
条件运算按照NOT、AND、OR的优先级进行，加上括号可以改变他的优先级
SELECT id, score FROM students; 只显示id和score列，表的部分列，列的顺序可以不和原表一致

SELECT id, name, gender, score FROM students ORDER BY score;  排序按照score的数据从低到高排列
SELECT id, name, gender, score FROM students ORDER BY score DESC;  同上，只不过是数据从高到低
SELECT id, name, gender, score FROM students ORDER BY score DESC, gender;  同上如果score的
默认的排序规则是ASC：“升序”，即从小到大。ASC可以省略，即ORDER BY score ASC和ORDER BY score效果一样
如果有WHERE子句，那么ORDER BY子句要放到WHERE子句后面

LIMIT 4 OFFSET 8; 将查询的结果以4个为一页进行分页，并从第9项开始显示数据 OFFSET的索引是从0开始的

OFFSET是可选的，如果只写LIMIT 15，那么相当于LIMIT 15 OFFSET 0
在MySQL中，LIMIT 15 OFFSET 30还可以简写成LIMIT 30, 15

聚合函数和聚合查询
查看数据的总数
SELECT COUNT(*) .....  得到的结果还是一个二维表，列名为COUNT(*)
SELECT COUNT(*) num ......  设置一个别名num
SUN 计算合计值，所有的数据都要是数值类型
AVG 计算平局值，所有的数据都要是数值类型
MAX 计算最大值
MIN 计算最小值
注意，MAX()和MIN()函数并不限于数值类型。如果是字符类型，MAX()和MIN()会返回排序最后和排序最前的字符
如果聚合查询的WHERE条件没有匹配到任何行，COUNT()会返回0，而SUM()、AVG()、MAX()和MIN()会返回NULL
还有一些sql提供的函数以后在慢慢总结
SELECT class_id, COUNT(*) num FROM students GROUP BY class_id;
多个列进行分组
SELECT class_id, gender, COUNT(*) num FROM students GROUP BY class_id, gender;

添加数据
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...), (值1, 值2, ...);
字段的顺序和表的顺序可以不一样，但是值的顺序必须要和字段的顺序一样
ex：
INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);
INSERT INTO students (class_id, name, gender, score) VALUES
  (1, '大宝', 'M', 87),
  (2, '二宝', 'M', 81);


修改已有数据
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
UPDATE students SET name='大牛', score=66 WHERE id=1;
score=score+10 可以使用表达式
可以没有UPDATE的的WHERE条件，那么整个表都会被改变，最好是先用SElECT语句来测试是否筛选得到了期望的记录，再改变

删除数据
DELETE FROM <表名> WHERE ...;
DELETE FROM students WHERE id=1;
也可以一次删除多条记录
如果没有匹配到任务语句，不会报错也不会删除任何东西
当没有WHERE的时候，整个表的记录都会删除
每当删除成功后，或者没有需要删除的时候，也会有提示

information_schema、mysql、performance_schema和sys是系统库


















