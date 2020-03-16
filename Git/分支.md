## 增
git branch dev　　创建dev分支   


## 删
git branch -d dev　　删除dev分支（如果dev没有合并到当前分支，会有提示）   
git branch -D dev　　强制删除dev分支，不管合没合并   
git push origin --delete dev　　删除远程库上的dev分支   


## 改
git checkout dev　　切换到dev分支   
git push origin dev　　只是推送分支（如果之前已经创建了）   
git branch -m oldbranchname newbranchname   重命名本地分支


## 查
git remote　　查看远程库   
git remote -v　　查看远程库详细信息（是否可提交 | 是否可拉取）   
git branch　　查看本地所有分支，并标出当前分支   
git branch -a　　查看所有分支   
git branch -r　　查看所有远程分支   

## 工作区
git stash　　隐藏当前分支上工作区的修改   
git stash list　　查看隐藏的内容   
git stash apply　　恢复隐藏内容，不删除记录的隐藏内容   
git stash drop　　删除恢复的隐藏内容   
git stash pop　　恢复隐藏内容的同时将隐藏内容一并删掉 
