# 流程控制

```python
#!/usr/local/bin/python3
# -*- coding: UTF-8 -*-

# 条件语句
# flag = False
# name = 'care'
# if name == 'python':
#     flag = True
#     print 'welcome boss'
# elif name == 'care':
#     print 'care'
# else:
#     print name  

# while循环
# count = 0
# while count < 9 :
#    print 'The count is:', count
#    count = count + 1
# #
# count = 0
# while count < 9:
#     print 'The count is:', count
#     count = count + 1
# else:
#     print 1  # 结束循环的时候会执行一次
# #
# while (flag): print 'Given flag is really true!'

# for循环 可以遍历字符串和列表
# for letter in 'Python':
#     print '当前字母 :', letter
# #
# fruits = ['banana', 'apple',  'mango']
# for index in range(len(fruits)):
#     print '当前水果 :', fruits[index]
# for index in range(len(fruits)):
#     print '当前水果 :', fruits[index]

# beak 跳出当前层的循环
for letter in 'Python':
    if letter == 'h':
        break

# continue 结束本次循环，开始下一次循环 
for letter in 'Python':
    if letter == 'h':
        continue

# beak 跳出当前层的循环
````