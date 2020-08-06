# 我自用的一些脚本

## 工作目录切换的shell(work)
```
#! /bin/bash

# 当前的一些在做的项目
echo '1 > vue_maoyan(猫眼电影)'
echo '2 > trunk(视频管理系统)'
echo '3 > blog(我的博客)'

# 选择要进入的项目
read -p "选择要进入的项目: " item
# 根据用户的选择，进入相应的项目
if [ $item -eq 1 ] 
then
  cd /home/care/Documents/vue-maoyan
fi
if [ $item -eq '2' ] 
then
  cd /home/care/Projects/trunk
fi
if [ $item -eq 3 ]
then
  cd /home/care/Desktop/blog
fi
```
care@care:~$ . work  
ps: .后面有一个空格，要不然是切换不了路径的

## 软件安装的shell(softwareinstall)
```
#! /bin/bash
num='0' #待安装的软件的序号
ware1="Git安装"
ware2="C++环境配置"
ware3="nvm安装"
ware4="node安装"

while [ $num == '0' ]
do
  echo "1.Git"
  echo "2.C++环境配置"
  read -p "请输入要安装的软件序号: " -t 30 num;
  if [ num != '0' ] ; then
    eval 'ls'
  echo ‘安装完成’
  echo ''
  num=0
  fi
done
```

## 自定义命令加入linux的shell
```

```