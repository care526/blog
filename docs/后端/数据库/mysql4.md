# mysql4

sql对于大小写不敏感(建议大写)

每条语句后面的分号建议加上

SELECT
SELECT - 从数据库表中获取数据
SELECT 语句用于从表中选取数据。
SELECT 列名称 FROM 表名称
SELECT LastName,FirstName FROM Persons   // 中间用逗号分割
SELECT * FROM 表名称   // *是选取所有

DISTINCT  仅仅展示不同的项,相同的项会合并
SELECT DISTINCT Company FROM Orders 

WHERE  指定挑选的条件
等于|不等于  = <>
大于|小于  > <
大于等于|小于等于  >= <=
在某个范围内  BETWEEN
搜索某种模式  LIKE
SELECT * FROM Persons WHERE City='Beijing'  // 建议使用单引号

AND|OR  多个查询条件  并且|或者的意思
SELECT * FROM Persons WHERE FirstName='Thomas' AND LastName='Carter'
SELECT * FROM Persons WHERE firstname='Thomas' OR lastname='Carter'

ORDER BY  将查询的结果排序
如果排序的是字符串,默认是正序  ASC
SELECT Company, OrderNumber FROM Orders ORDER BY Company
逆字母排序  DESC
SELECT Company, OrderNumber FROM Orders ORDER BY Company DESC
同时有多个排序条件,字母和数字,都是正序的
SELECT Company, OrderNumber FROM Orders ORDER BY Company, OrderNumber
字母逆序,数字正序
SELECT Company, OrderNumber FROM Orders ORDER BY Company DESC, OrderNumber ASC




INSERT INTO - 向数据库表中插入数据
INSERT INTO 表名称 VALUES (值1, 值2,....)  // 向表中插入值
INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)  // 向表中指定位置插入值



UPDATE - 更新数据库表中的数据
UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
UPDATE Person SET Address = 'Zhongshan 23', City = 'Nanjing' WHERE LastName = 'Wilson'  // 更新多个值



DELETE - 从数据库表中删除数据
DELETE FROM Person WHERE LastName = 'Wilson'   // 删除指定行
DELETE * FROM table_name  // 删除表的所有行




CREATE DATABASE my_db;  //创建新数据库

CREATE TABLE Persons   // 创建表并指定列及其类型
(
Id_P int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
);
ps:相关的数据类型
integer(size)  // 以下四个类型是整数,size规定了整数位的最大长度
int(size)
smallint(size)
tinyint(size)
decimal(size,d)  // 小数,size为整数位的最大长度,d为小数位的最大长度
numeric(size,d)
char(size)  // 固定长度的字符串(字符,数字,特殊字符),size为字符串的最大长度
varchar(size)  // 变长度的字符串(字符,数字,特殊字符),size为字符串的最大长度
date(yyyymmdd)  // 日期

指定表中添加数据的约束条件(可以在创建表的时候指定,也可以在表创建后用ALTER TABLE指定)
NOT NULL  // 表示该表不接受NULL(空值),如果没有该值,则添加不成功
UNIQUE  // 指定唯一标识,指定的该行,所有的值都要是唯一的(可以写在以下例子中的两个位置都可以),一个表可以有多行有该标识标记
PRIMARY KEY  // 指定表的主键,一个表只能有一个主键,主键中的数据也是唯一标识
一个表中的 FOREIGN KEY 指向另一个表中的 PRIMARY KEY
CREATE TABLE Persons
(
Id_P int NOT NULL UNIQUE PRIMARY KEY,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
UNIQUE (Id_P) PRIMARY KEY (Id_P) FOREIGN KEY (Id_P)
)

CHECK  约束

DEFAULT  默认值
City varchar(255) DEFAULT 'Sandnes'

















ALTER DATABASE - 修改数据库
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
CREATE INDEX - 创建索引（搜索键）
DROP INDEX - 删除索引