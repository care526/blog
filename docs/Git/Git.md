# Git

## Git配置
ssh-keygen -t rsa -C "71073534@qq.com"　生成SSH Key    
id_rsa是私匙 id_rsa.pub是公匙（公匙和私匙的作用，属于密码学，百度！）   
git config --global user.name "care526Lj"　配置user.name   
git config --global user.email "710783534@qq.com"　配置user.email   

## 项目初始化
git init　　初始化版本库  
配置需要版本控制的文件/目录和要忽略的文件/目录  
在工作目录创建 .gitignore 文件  
*.zip　 　 ＃忽略所有以 .zip 结尾的文件  
!lib.zip　 ＃lib.zip文件添加到版本控制  
build/　　  #忽略build目录下的所有文件  
doc/*.txt   #忽略doc目录下的所有以 .txt 结尾的所有文件  

当某个文件已经添加到git了，中途又添加到忽略文件中，以下代码让忽略文件重新生效
git rm -r –-cached .
git add .
git commit -m "Refresh adding .gitignore file"

git rm -rf --cache 文件/文件夹

## 远程仓库
git remote add origin git@github.com:care526/learnGit.git　  
为当前仓库添加远程仓库，后面的一长串是该远程仓库的地址  
也可以用https的地址，如https://github.com/care526/learnGit.git  
origin是远程库的默认name，也可以改成别的名字  

## 克隆
git clone .git name  由某版本库克隆生成一个新的目录     
git clone git@github.com:care526/learnGit.git　克隆远程库到本地   
git clone -b <name> git@github.com:care526/learnGit.git　克隆远程库的指定分支到本地   

## 版本提交／查看／回退／撤销    
![image](./images/clipboard.png)   
git add xxx　　添加某文件到暂存区，可使用多次添加多个文件   
git add .　　添加所有文件   
git commit -m "xxx"　　将添加到暂存区的文件更新同步到版本库   
git push -u origin master　　将本地库的内容推送到远程库（第一次提交要加-u,之后可以省略）  
git push -f XXXXXX   强制将本地代码覆盖远端的代码，会将之前的提交记录都清除，所以在实际开发中是不要使用的

git status　　查看当前的修改了那些文件    
git diff filename　　查看具体修改了什么内容， filename是文件名  
git log　　查看版本推送更迭历史记录   
git log --pretty=oneline　　同上，简化输出    
git log --graph --pretty=oneline --abbrev-commit　　同上，还可以看到分支的合并情况    
git log --stat --summary　查看每一次版本的大致变动情况       
git show dfb02e6e4f2f7b573337763e5c0013802e392818（版本号）　查看该版本的更新信息，也可以只写该版本的前几位dfb02e   
git show HEAD^ ## 查看 HEAD 的父版本更新细节   
git show HEAD^^ ## 查看 HEAD 的祖父版本更新细节      
git show HEAD~4 ## 查看 HEAD 的上四个版本更新细节    
git tag v0.1 dfb02　对dfb02版本生成一个自定义的版本号，对未来发布有好处   
git reflog　　查看每一次的记录      

git reset --hard HEAD^　　回退到上个版本   
git reset --hard HEAD^^　 回退到上上个版本（^的个数以此类推）   
git reset --hard HEAD~10 回退到上10个版本（免得 ^ 写的太长）   
git reset --hard commit_id 回退到指定版本，commit_id是某个版本号（版本号很长，可以只写前面几位）   
// reset 会使会退版本之后的都清除
git revert -n 版本号
// revert 只会将该版本的修改从分支中去掉，保留其他版本的变动，然后生成一个最新的版本，其他版本都在该版本之后

git checkout -- a.txt　　将a.txt的修改撤销，a.txt会自动回到修改前的状态   
两种情况，如果已经add了，那么将会回到暂存区里的文件内容，如果没有，将回到工作区修改前的状态，总之，就是回到最近的一次的git commit 或 git add的状态   
git reset HEAD filename　　将某个文件从暂存区的修改回退到工作区（如果是上面的第二种情况，就先用这个命令回到暂存区的修改状态，再回到工作区的修改状态）   
git rm filename　　删除某个文件，之后再commit就行了（如果用rm删除，要先git add . 再git commit）   

## 分支
创建分支的目的是在不影响主分支的情况下进行开发，在分支完成的时候将分支的内容和主分支合并即可   
git checkout filePath   还原未提交的该文件到上次提交   
git checkout .   还原未提交的所有文件到上次提交  
git checkout -b dev　　创建dev分支，并切换到该分支（等于上面两个命令之和）   
git merge dev　　合并dev分支到当前分支   
git merge --no-ff -m "XXX" dev　　将dev分支合并到当前分支（不采用Fast forward模式），并创建commit描述，提交一次，XXX是这次提交的修改内容   
git push --set-upstream origin dev　　在远程库创建分支并推送   

如果当前分支和主分支都提交的修改，但是修改的内容是不同的，我们在合并分支的时候就会发生冲突（相同文件的内容冲突），我们要手动修改两个分支为相同，然后才能合并分支，再删除   

修改某个分支的bug的时候，先在当前分支分一个分支，在分好的分支上进行修改，修改完了合并分支，再删除分出来的分支。
开发新功能的时候，也是先分一个功能分支，开发实验结束后再合并，删除，流程同bug分支   

  
git push origin master　　推送主分支到远程库   
git push origin dev　　推送dev分支到远程库   
git checkout -b dev origin/dev　　拉取远程库的分支到本地并切换   
git pull　　抓取远程库的新提交到当前工作区
git fetch   抓取远程库的新提交到本地库  
git branch --set-upstream dev origin/dev　　建立远程库分支与本地分支的关联   
当其他人对你要用的分支做了提交，远程库的分支领先于你的本地分支，要先拉取远程库的分支与本地合并，再做开发。如果拉取的分支和当前有冲突，要先解决冲突。 

合并分支的时候，发生冲突，解决完冲突后，已经合并，只需要commit一下就ok了

## 分支策略
- 开发/测试/线上 三个分支的方式
  每个人的所有开发都在master(线上)分支上拉取本地分支开发
  本地开发完成，将分支代码合入UAT(测试)分支供测试
  测试完成，检测是否可以自动合入master分支，如果不可以，用本地分支merge master分支，解决冲突，解冲突的过程中，询问冲突代码的之前开发人员，避免多次上线代码被冲掉，合入master
  分支开发完成，删除远程分支，本地分支保留一小段时间再删除，避免上线有问题，代码回滚，可立即重新上线
  UAT分支定期删除，从master分支拉取本地UAT分支，推送到远端
  ps: 本地开发的小技巧，前提是不需要和后端对接口的开发可以这样做
  如果后端使用cookie保存登录状态
  只要本地的域名配置为和代理（测试服/正式服）的域名一致，那么本地就可以访问代理的接口了
  hosts不要忘记配置了