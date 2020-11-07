#!/bin/bash

cp -r dist/. ../gitee/ljcare

cd ../gitee/ljcare
git config user.email 710783534@qq.com
git config user.name care

time=$(date "+%Y-%m-%d")
git add .
git commit -m $time
git push