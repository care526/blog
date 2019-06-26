## 将文件克隆到本地
svn checkout path  (缩写：svn co path)
/home/care/Desktop/trunk/src/modules/group

## 添加新文件到版本库
svn add file
svn add care.js  //添加一个文件
svn add *.js  //添加以js结尾的文件
svn add module/  //添加module目录下的所有文件

## 删除版本库的文件
svn detele file/dir   //删除文件或者目录
ps: 不能直接删除

## 将改动提交到版本库  (缩写svn ci)
svn commit -m ‘版本描述信息’
svn commit -m ‘版本描述信息’ fileSrc  # 提交单个文件或目录,在后面跟上路径即可

## 更新到最新版本
svn update  （缩写：svn up） 全部文件更新
svn update path   只更新path目录对应的文件到最新
svn update -r 200 text.js  将text.js文件回滚到版本200

## 查看文件/目录的状态
svn statue file   查看文件状态(正常状态的不显示信息)
svn status dirtory   查看目录的状态(正常状态的不显示信息)

?: 不在svn的控制中
M: 内容被修改
C：发生冲突
A：预定加入到版本库
K：被锁定

## 取消未提交文件/目录的修改
svn revert file  // 取消文件的修改
svn revert -R dirtory  // 取消目录的修改

## 查看日志
svn log   查看版本更新的日志
svn log file   查看单个文件的修改日志

# 修改账号密码
临时: svn co URL --username xxx --password xxx   # 在命令的后面加上--username和--password选项
永久: 删除目录 ~/.subversion/auth/ 下的所有文件,下次登录就会要求重新输入账号密码

海东项目的账号密码
liujie 123Abc456
瀚蓝项目的账号密码
liuj Abc,123
