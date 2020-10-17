#!/bin/bash

# 待打包目录
WillBuildDir=docsWillBuild

# 删除 docsWillBuild 目录
rm -rf ./$WillBuildDir

# 新建待打包目录
mkdir -p $WillBuildDir/md
mkdir -p $WillBuildDir/md/images

# 移动固定目录
cp docs/README.md $WillBuildDir/README.md
cp -r docs/navigate $WillBuildDir/navigate
cp -r docs/.vuepress $WillBuildDir/.vuepress

# 复制文件到待打包目录
node ./bash/rename.js

# 更新docs中的data.json
cp $WillBuildDir/.vuepress/data.json docs/.vuepress/data.json

# # 打包
npx vuepress $1 $WillBuildDir
