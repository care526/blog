# Shell脚本的目的，使Linux的使用自动化，减少管理者不必要的时间浪费。

## Shell知识
- 分类   
  交互Shell：等待用户输入命令的Shell  
  非交互Shell：读取某个脚本文件，直接执行  

## 格式
```
#! /bin/bash  #表示用什么来执行该脚本
echo 123 #我是注释
```
- 同一行的多个命令中间用；分隔

## 执行脚本的两种方式
- 在脚本第一行指名执行的解释器，并赋予脚本可执行权限
```
#!/bin/bash
xxx
xxx
ps: 上面三行是a.sh的内容

chmod 755 a.sh
```
JS脚本(使用node解释器)
`#!/home/care/config/node/bin/node`
  
## 常用的命令
- set 查看环境变量列表  

- echo XXX  输出内容   
  -n 不换行输出  
  echo 内容 -> filename 输出内容到文件  
  echo 输出的语句中有‘“的时候，在最外层是‘时，内部不要有单独的’ |　"一样  

- pwd  打印当前所在位置  

- test 测试命令   
  一般用于if语句的后面  
  ```
  if test XXX
  if [ xxx ]   #[]也是测试命令
  ```
  tese测试的三种条件为　数值比较　字符串比较　文件比较  
  n1 -eq(==) n2  
  -ge(>=) -gt(>) -le(<=) -lt(<) -ne(!=)

- read 选项 变量名  
  \-p "提示信息"  
  \-t 等待秒数  
  \-n 接受的字符数  
  \-s 隐藏输入信息  
  read -p "请输入姓名：" -t 30 name  #等待30秒将输入赋值给name变量

## 变量
care=10   #定义变量care，=两边不能有空格  
echo $care   #使用变量care，用\$  
echo ${care}  # 也可以

- \` 反引号，用于得到命令的输出值　care=\`ls\`  
- \> 输出重定向，如：date > tes，date的输出信息保存在tes文件中，如果文件存在，将会被覆盖
- \>> 同上，不覆盖，追加输出到文件的后面
- < 输入重定向　wc < tes 将tes的文本输入wc命令中。这个用的其实有点少，一般用管道
- ｜管道　oder1 | oder2 将order1命令的输出送给oder2

局部变量定义(在函数中使用)
`local care`

## 重要的环境变量
HOME  用户的主目录（即家目录）
SHELL  用户在使用的Shell解释器名称
PATH  定义解释器搜索用户执行命令的路径
RANDOM  生成一个随机数字
LANG  系统语言、语系名称
PS1  	Bash解释器的提示符
HISTSIZE  history命令可显示的命令条数
HISTFILESIZE  可以保存记录的命令的条数


## 流程语句
__if语句__
```
if ls   #当执行完if后面的命令后，退出状态码是0，表示执行成功，就会继续执行then后面的语句
then    #所以if检测的是命令是否执行成功
    echo it works
fi

if ls; then   #也可以这样写
    echo it works
fi
```
__if else语句__
```
if XXX
then
    XXX
else
    XXX
fi
```
__if else if语句__
```
if XXX
then
    XXX
else if XXX
then
    XXX
fi
```
__while语句__
```
while test commed
do
  #命令
done
```
__for语句__
```
for test in $array  #这个位置可以是个数组,也可以是多个变量都写在这儿
do
  #命令
done

for (( i=1; i<=10; i++))  # C语言风格的for循环
do
  echo $i
done

for (( i=1, a=1; i<=10; i++, a--))   # 多变量的循环
```

## 函数
### 函数定义
```
function name {}
name () {}
```
### 函数参数
调用传参
`name option1 option2 ...`
参数使用
在函数内部$开头的一些变量
- $0: 函数名
- $n: 第n个参数
- $#: 参数的个数
- $?: 前面一行的状态吗(0 ~ 255)
- $*: 所有参数(将所有参数当做一个整体,中间用空格分隔)
- $@: 所有参数(用for循环可以遍历所有参数)
### 函数使用
`name  #直接写函数的名字`
先定义后使用
return number(0~255之间)
用$?来获取,必须在函数调用的后一行使用
### 接收函数的输出
- 默认的输出
  函数最后一个语句的执行退出码
- 使用return来返回一个０～255的数字
ps: 以上两个方法，都要在函数执行完后立即接收，$?．否则会丢失
```
name  #该函数用return返回了一个数字
echo $?  #打印出该函数的返回值
```
- 将整个函数的输出保存在一个变量当中(会忽略read的提示)
  ```
  care=`name`  #会将name函数的所有输出保存在care变量当中
  ```

## 读取用户输入
read 选项 参数 待保存的变量
- -p '相关提示'  #提示用户输入什么
- -t 5  #在5s内输入,超时后read返回一个非0的状态码
- -s #隐藏输入,如输入密码的时候
read还可以读取文件的数据

## 跨脚本调用
在ａ脚本在使用ｂ脚本中的func1这个函数
```
#!/bin/bash
. ./b  # 使用./source 表示在ａ脚本的上下文中运行ｂcat
func1
```

## 其他
ll && ls  # 如果ll执行不成功，ls不会执行
ll || ls  # 如果ll执行不成功，ls也会执行
ll ; ls  # 同上
