#!/bin/bash

cd $1

git pull &&
git add . &&
git commit -m "a" &&
git push