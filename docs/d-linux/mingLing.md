# 命令

## 命令的生效顺序  
绝对路径和相对路径的执行命令(本质是指定命令所在的文件)  
别名  
bash内部命令
按$PATH环境变量定义的目录查找循序找到的第一个命令  

## 系统相关的
- shutdown 【选项】 时间  
  -c：取消前一个关机命令  
  -h：关机  
  -r：重启  
  shutdown now  关机  
- reboot  重启  
- init  运行级别  
  init 0  关机  
  init 6  重启  
- alias / unalias  别名  
  alias  别名查询  
  alias ls=‘ls --color=auto'’  设置别名  
  unalias ls   删除别名  
  以上的设置都是临时的，需要写入.bashrc文件中才会永久生效
- source 文件重载(简要写法一个点 . )
  source ./home/care/.bashrc
  . ./home/care/.bashrc(和上面是一样的)
- nohup XXX & 将XXX命令推入后台运行


## 软件的安装和使用
- apt  包管理命令  
  更新软件列表：apt-get update
  更新软件程序：apt-get updrade
  安装一个程序包：apt-get install packagename
  卸载程序：apt-get remove packagename
  搜索某个程序包：apt-cache search packagename
  删除已下载包文件：apt-get clean  
  删除已下载的旧包文件：apt-get autoclean  
  卸载自动安装且不再使用的软件包：apt-get autoremove


## 文件命令
- ls 【选项】 【文件或目录】
  -a 显示所有文件，包括隐藏文件
  -l 显示详细信息（权限，最后一次修改时间，大小等） 别名：ll
  -d 查看目录本身属性
  -h 人性化显示文件大小
- mkdir 【选项】 【目录】 建立目录
  -p 递归创建，就是带有子目录的目录 a/b/c
  mkdir -p a/b/c
  -m 直接赋予权限
  mkdir -m 711 a.txt
- rmdir 【选项】 【目录】 删除空的目录，有内容的删不掉
  -p 递归的删除空目录
  rmdir -p a/b/c  必须都是空目录才行
- cd 【目录】 切换目录
  cd ~ 回到家目录
  cd - 回到上次的目录
  cd .. 进入上级目录
- pwd 打印当前所在位置
- rmdir 删除空目录（用的及其少）
- rm 删除文件
  -r 删除文件夹，询问是否删除
  -f 强制删除，不询问
- cp 【选项】 【原文件或目录】【目标目录】 复制
  -r 复制目录
  -p 连带文件属性复制
  -d 若源文件是链接文件，则复制链接属性
  -a 相当于 -pdr
  如果目标目录后加了名字，那复制的就会改为写的名称
- cp 【选项】 【文件/目录】 【文件/目录】 复制文件到指定目录
  -i  如果目标文件/目录存在，询问是否覆盖
- mv 【选项】 【文件/目录】 【文件/目录】 剪切/改名
  目标目录是当前目录，那么相当于改名
  -i 如果文件存在，询问是否覆盖
  -f 如果文件存在，强制覆盖，不给任何提示
  -b 如果文件存在，覆盖前先备份
- rm　【选项】　【文件／目录】　删除文件／目录
  -r　递归删除，用于删除目录
  -f  不出现警告信息
- basename　取得路径的文件名
  /etc/sysconfig/network　=>　network
- dirname　取得路径的目录名
  /etc/sysconfig/network　=>　/etc/sysconfig
  文件内容查阅
  cat　【选项】　【文件】　连续地显示文件内容
  －n  列出行号
  －b　列出非空白行的行号
- tac　【选项】　【文件】　同上，但是从最后一行开始反向显示
- nl　【选项】　【文件】　同cat，但是有行号
- more　【选项】　【文件】　一页一页的显示内容
  在显示的内容区域
  空格键：下一页
  Enter：下一行
  b：上一页
  q：离开
- less　【选项】　【文件／目录】　删除
- head　【选项】　【文件／目录】　删除
- tail　【选项】　【文件／目录】　删除
- od　【选项】　【文件／目录】　删除


## 网络命令

## 磁盘挂载命令

## 用户及用户组
- useradd 选项 用户名  #为linux添加用户
  -d 目录  指定主目录,如果不存在同时使用-m选项,创建主目录
  -s shell文件  指定登录的shell
  -g 用户组  指定所属的用户组
  -G 用户组[,用户组...]  指定附加的其他用户组
  `useradd –d /usr/sam -m -s /bin/sh -g group –G adm,root gem`
- usermod 选项 用户名  #修改用户的信息
  ps: 所有的选项同useradd
- userdel 选项 用户名  #删除用户
  -r 包括主目录一起删除
  `userdel -r care`
- passwd 选项 用户名  #修改用户口令
  -l 禁用账号
  -u 解禁账号
  -d 使账号无口令
  -f 强迫用户下次登录的时候修改口令
  `passwd  #没有选项的时候,修改自己的密码`
  `passwd care  #root用户设置普通用户的密码`
- groupadd 选项 用户组  #添加用户组
- groupdel 用户组  #删除用户组
- groupmod 选项 用户组  #修改用户组的信息
  -n 新用户组name  修改用户组的名字
  `groupmod -n group2 group3  #将group3改为group2`
- newgrp 用户组  #切换用户的主用户组
  `newgrp root  #当前用户切换到root用户组`

## 快捷键
ctrl + l 清屏
Tab键 具有名称补全功能（命令补全，文件／目录补全）

## 权限
--rw-r--r--
第一个 - 是文件类型（-文件 d目录 l软链接文件）（还有四种文件类型，操作者用不到，为系统文件）
rw- r-- r--
u所有者 g所属组 o其他人
r读（4） w写（2） x执行（1） 权限的数字表示
chmod [选项] 模式 文件名 修改文件的权限命令
-R 递归（如果文件名是个目录，那么目录的所有文件的权限都会修改）
chmod u+x 文件名 chmod g+w,o+w 文件名
chmod u=rwx,o=rw 文件名（当然也可以写单个的）
chmod a=rwx 文件名 （a代表所有人）
以上的写法都比较麻烦，一般使用数字表示法来代替
rwxr-xr--
7 5 4
chmod 754 文件名
权限对文件的作用（文件的最高权限是x）
r 读取文件内容
w 编辑，新增，修改文件内容（但是不包括删除文件）
x 可执行
权限对目录的作用（目录的最高权限是w）（只有赋予0 5 7是正常的）
r 可以查询目录下的文件名
w 修改目录结构的权限，新建文件和目录，删除此目录下的文件和目录，重命名此目录下的文件和目录，剪切（touch rm mv cp）
x 可以进入目录（cd）
修改文件的所有者
chown 用户名 文件名
chown root：root 文件名 同时修改文件的所有者，和所属组（中间用：分隔）
修改文件的所属组
chgrp 组名 文件名
ps：我们在添加一个用户的时候会，默认将该用户添加到与用户名相同的组中
umask 命令可以查看默认权限（一般为0022）
临时修改umask的值 umask 0033 （如果想要永久修改，要写入配置文件）
文件的默认权限的最大值为666
建立文件的默认权限是666减去umask的值（先换算成字母再减）
如 -rw-rw-rw- 减去 -----w--w- 等于 -rw-r--r-- (还可以理解成逻辑与运算)
目录的默认权限最大值为777
建立目录的默认权限是777减去umask的值（先换算成字母再减）
如 -rwxrwxrwx 减去 -----w--w- 等于 -rwxr-xr-x (还可以理解成逻辑与运算)
ACL权限