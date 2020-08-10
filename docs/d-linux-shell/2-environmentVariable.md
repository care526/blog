# 环境变量

## 全局变量
对所有shell会话可见，对所有shell创建的子会话也可见
命名：全大写字母，下划线分割

## 局部变量
只对创建他们的shell可见

## 设置环境变量
### 局部 ( 建议小写字母：区分个人环境变量和系统环境变量 )
```bash
care=care
long_string='test a long string'
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