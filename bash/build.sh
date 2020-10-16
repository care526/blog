#!/bin/bash

# 待打包目录
WillBuildDir=docsWillBuild

# 删除 docsWillBuild 目录
rm -rf ./$WillBuildDir

# 新建待打包目录
mkdir -p $WillBuildDir/images

# 移动固定目录
cp docs/README.md $WillBuildDir/README.md
cp docs/README.md $WillBuildDir/gurd.md
cp -r docs/.vuepress $WillBuildDir/.vuepress

# 复制文件到待打包目录
node ./bash/rename.js

# 打包
npx vuepress build $WillBuildDir
