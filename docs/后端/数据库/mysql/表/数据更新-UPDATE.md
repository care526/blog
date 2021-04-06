# 数据更新

## 修改
```sql
UPDATE Customers
SET cust_contact = 'Sam Roberts',
    cust_email = 'kim@thetoystore.com'
WHERE cust_id = '1000000005';
```
如果没有WHERE，将修改Customers的所有行

## 删除
```sql
DELETE FROM Customers
WHERE cust_id = '1000000006';
```
如果没有WHERE，将删除Customers的所有行  
一般是逻辑删除(定义一个状态码)，而不是物理删除  