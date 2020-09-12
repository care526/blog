#!/bin/bash

# 待打包目录
WillBuildDir=`cat ./bash/willBuildDir`

# 删除 docsWillBuild 目录
rm -rf ./$WillBuildDir

# 复制源代码目录为待打包处理目录
cp -r docs $WillBuildDir

# 处理 docsWillBuild 目录中的无关文件
rm -rf ./$WillBuildDir/*----*