#!/bin/bash

# 复制博客展示项目的git到打包目录
rm -rf ./docsWillBuild/.git
cp -r ../care526.github.io/.git ./docsWillBuild/.git

time=$(date "+%Y-%m-%d")

git add .
git commit -m $time
git push