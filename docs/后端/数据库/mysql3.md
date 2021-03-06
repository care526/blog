# mysql3

TOP  规定要返回的记录的数目(可以是数字,也可以是百分数)
SELECT TOP 2 * FROM Persons;
SELECT TOP 50 PERCENT * FROM Persons;

LIKE  在 WHERE 子句中搜索列中的指定模式
SELECT * FROM Persons WHERE City LIKE 'N%';  // 以N开始的
SELECT * FROM Persons WHERE City LIKE '%g';  // 以g结尾的
SELECT * FROM Persons WHERE City LIKE '%lon%';  // 包含'lon'的
SELECT * FROM Persons WHERE City NOT LIKE '%lon%';  // 不包含'lon'的

通配符
%  表示缺少的若干个字母
_  表示缺少的一个字母
[charlist]  字符列中的任何单一字符
例如:[ALN] A或L或N
[^charlist]|[!charlist]  不是...
例如
[!A]  不是A

IN  操作符允许我们在 WHERE 子句中规定多个值
SELECT * FROM Persons WHERE LastName IN ('Adams','Carter');

BETWEEN ... AND 会选取介于两个值之间的数据范围。这些值可以是数值、文本或者日期
... WHERE column_name BETWEEN value1 AND value2;
... WHERE LastName BETWEEN 'Adams' AND 'Carter';
选择范围之外的人
... WHERE LastName NOT BETWEEN 'Adams' AND 'Carter';

Alias  给待查询的选项起别名(表/列)
SELECT column_name(s) FROM table_name AS alias_name;  // 表
SELECT column_name AS alias_name FROM table_name;  // 列
例子
SELECT po.OrderID, p.LastName, p.FirstName
FROM Persons AS p, Product_Orders AS po
WHERE p.LastName='Adams' AND p.FirstName='John';  // 表
SELECT LastName AS Family, FirstName AS Name FROM Persons;  // 列

多表查询
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons, Orders
WHERE Persons.Id_P = Orders.Id_P;
使用join来连接多个表

UNION  将两个查询显示在一张表中(列和顺序必须相同),相同的项会被合并
SELECT column_name(s) FROM table_name1
UNION
SELECT column_name(s) FROM table_name2;
UNION ALL  不合并相同的项
SELECT column_name(s) FROM table_name1
UNION ALL
SELECT column_name(s) FROM table_name2;

SELECT INTO  将查询的数据插入到指定的数据表中,紧跟着SELECT语句后面
SELECT Persons.LastName,Orders.OrderNo
INTO Persons_Order_Backup
FROM Persons
INNER JOIN Orders
ON Persons.Id_P=Orders.Id_P;











