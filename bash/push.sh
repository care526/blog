#!/bin/bash

cp -r dist/. ../care526.github.io

cd ../care526.github.io
git config user.email 710783534@qq.com
git config user.name care526

time=$(date "+%Y-%m-%d")
git add .
git commit -m $time
git push