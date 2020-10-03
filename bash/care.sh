#!/bin/bash

# 待打包目录
WillBuildDir=`cat ./bash/willBuildDir`

# 删除 docsWillBuild 目录
rm -rf ./$WillBuildDir

# 
mkdir $WillBuildDir

#
mkdir $WillBuildDir images





# 复制源代码目录为待打包处理目录
# cp -r docs $WillBuildDir

# 处理 docsWillBuild 目录中的无关文件
# rm -rf ./$WillBuildDir/*----*

## 重命名目录和文件
# node ./bash/rename.js $WillBuildDir
# node ./bash/rename.js $WillBuildDir allChild

## 打包
# npm run build