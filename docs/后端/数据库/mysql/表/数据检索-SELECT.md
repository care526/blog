# 数据检索

> 从 Products 表中检索一个名为 prod_name 的列  
```sql
SELECT prod_name
FROM Products;
```
> 检索两列，中间用逗号分隔  
```sql
SELECT prod_id, prod_name
FROM Products;
```
> 检索所有列 
```sql
SELECT *
FROM Products;
```

> 过滤单列数据中的重复项(DISTINCT)
```sql
SELECT DISTINCT vend_id
FROM Products; 
```
如果用于多列，重复列的每一项都相同才算相同  

> 限制只展示部分行
以下展示查找的行，不超过5行
```sql
SELECT prod_name
FROM Products
LIMIT 5; 
```
从查找到第3个开始(索引从0开始)
```sql
SELECT prod_name
FROM Products
LIMIT 5 OFFSET 3;
```
```sql
SELECT prod_name
FROM Products
LIMIT 5, 3;
```

## 排序(ORDER BY)
它必须是SELECT的最后一条子句 
> 将查出来的数据按照prod_price，再按照prod_name排序
```sql
SELECT prod_id, prod_price, prod_name
FROM Products
-- 多个排序项中间用逗号分隔，后一个是在前一个相同时才再排序
ORDER BY prod_price, prod_name;
```
同上，一种简写发。2: 代表SELECT查出来项的第二个 3: 代表SELECT查出来项的第三个 
不推荐使用：数字代表的语义不明确，改了查询项后容易漏改ORDER BY 
```sql
SELECT prod_id, prod_price, prod_name
FROM Products
ORDER BY 2, 3;
```
> 同上，但是价格是按倒叙查的
```sql
SELECT prod_id, prod_price, prod_name
FROM Products
-- 多个排序项中间用逗号分隔，后一个是在前一个相同时才再排序
ORDER BY prod_price DESC, prod_name;
```
DESC关键字只**应用到直接位于其前面的列名**  
如果想在多个列上进行降序排序，必须对每一列指定 DESC 关键字  
- DESC是DESCENDING的缩写，这两个关键字都可以使用
- ASC是ASCENDING的缩写，默认是升序

## 过滤(WHERE)
### WHERE子句的操作符
| = | > | < |<>|!=|>=|<=|!>|!<|BETWEEN|IS NULL|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|等于|大于|小于|不等于|不等于|大于等于|小于等于|不大于|不小于|指定的两个值之间|为NULL值|
- <> or != 各个sql软件的支持度不同
- 
> 查询价格为3.49的
```sql
SELECT prod_name, prod_price
FROM Products
WHERE prod_price = 3.49;  
```
> 查询价格为5到10之间的
```sql
SELECT prod_name, prod_price
FROM Products
WHERE prod_price BETWEEN 5 AND 10;
```
> 检查名字是NULL的
```sql
SELECT prod_name, prod_price
FROM Products
WHERE prod_name IS NULL;
```

### 组合过滤条件
> 过滤vend_id为'DLL01'并且prod_price小于等于4的
```sql
SELECT prod_id, prod_price, prod_name 
FROM Products
WHERE vend_id = 'DLL01' AND prod_price <= 4;
```
> 过滤vend_id为'DLL01'或'BRS01'的
```sql
SELECT prod_name, prod_price
FROM Products
WHERE vend_id = 'DLL01' OR vend_id = 'BRS01'; 
```
#### 多个AND OR组合
- AND在求值过程中优先级更高
- 建议使用()将组合包起来，避免歧义
> 查询vend_id为'DLL01'或'BRS01'，并且prod_price大于等于10的
```sql
SELECT prod_name, prod_price
FROM Products
WHERE (vend_id = 'DLL01' OR vend_id = 'BRS01') AND prod_price >= 10; 
```
同上
```sql
SELECT prod_name, prod_price
FROM Products
WHERE  vend_id IN ( 'DLL01', 'BRS01' ) AND prod_price >= 10; 
```
#### NOT
用于否定后面的条件
> 过滤vend_id不为'DLL01'的
```sql
SELECT prod_name
FROM Products
WHERE NOT vend_id = 'DLL01'
```

### 通配符
- 区分大小写
#### 百分号(%)通配符
- %不会匹配NULL
> 过滤prod_name中以'Fish'开头的('Fish'也算)
```sql
SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE 'Fish%'; 
```
> 过滤prod_name中包含'bean bag'的
```sql
SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE '%bean bag%'; 
```
> 过滤prod_name中以F开头y结尾的
```sql
SELECT prod_name
FROM Products
WHERE prod_name LIKE 'F%y'; 
```
单词之间有空格会隔断匹配(如: Fish bean bag toy)  
可以使用F%y%来匹配

#### 下划线(_)通配符
只匹配一个字符，不能多也不能少  
```sql
SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE '__ inch teddy bear';
```
12 inch teddy bear  
18 inch teddy bear   

#### 中括号([])通配符
- 匹配任意字符
```sql
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '[JM]%';
```
John Smith
Michelle Green