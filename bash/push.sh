#!/bin/bash

# 复制博客展示项目的git到打包目录
rm -rf ./dist/.git
cp -r ../care526.github.io/.git ./dist/.git

time=$(date "+%Y-%m-%d")

cd ./dist
git config user.email 710783534@qq.com
git config user.name care526
git add .
git commit -m $time
git push