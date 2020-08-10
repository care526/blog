# 环境变量

## 全局环境变量
当前shell，及其创建的子shell可见    
如果想真正的全局，可在shell生成时读取的配置文件中导出为全局环境变量  
命名：全大写字母，下划线分割

## 局部环境量
只对创建他们的shell可见

## 设置环境变量
### 局部 ( 建议小写字母：区分个人环境变量和系统环境变量 )
```bash
num=1  # 数值
name=name  # 字符串
long_name='long name'  # 字符串
long_nam2="long name2"  # 字符串
```
## 全局
先创建一个局部的环境变量，在导出为全局的
```bash
care=care
export care
```

## 使用环境变量 $
`echo $HOME`

## 删除环境变量
```bash
unset care
```

## 环境变量的类型
1. 数值
    ```bash
    num=1  # 数值
    ```
2. 字符串
    ```bash
    name=name  # 字符串
    long_name='long name'  # 字符串
    long_nam2="long name2"  # 字符串
    ```
3. 数组
    ```bash
    arr=(1 2 3)
    echo ${arr[1]}  # 查看第二个元素
    echo ${arr[*]}  # 查看第所有元素
    arr[1]=5  # 设置第二个元素
    ```
    ps: 不建议删除数组的元素，会导致数组长度减少

## 重要的全局环境变量
- PATH
  shell查询命令执行文件的所有路径