## 待分类
echo
set  显示所有环境变量

PATH

/etc/profile  所有用户的主启动文件，查询命令
$HOME/xxx    不同系统文件不同

bash shell的三种启动方式
登录时当做默认登录的shell
作为非登录的shell的交互式shell
作为运行脚本的非交互shell

arr=(1 2 3)
echo ${arr[1]}
echo ${arr[*]}
arr[1]=5

在定义的shell中使用，如果想要在全局中使用，在启动文件中定义即可
alias -p  查看所有现有别名
alias li='ls -il'