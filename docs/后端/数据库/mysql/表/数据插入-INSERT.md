# 数据插入

```sql
INSERT INTO Customers VALUES( '1000000006', 'Toy Land', 'New York', NULL );
```
不建议使用以上语法：简单但是依赖表中列定义的次序  
```sql
INSERT INTO Customers( cust_id, cust_name )
VALUES ( 1, 'name' );
```
这种方式可以插入行的所有数据，也可以插入部分数据

## 插入查询结果
```sql
INSERT INTO Customers( cust_id, cust_email )
SELECT cust_id, cust_email FROM CustNew;
