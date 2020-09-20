#!/bin/bash

type=$1

# 检测参数是否是 a b ... f ...
if [ "$type" == "" ];
then
    echo '参数输入不合法';
    exit 1;
else 
    echo '开始处理';
fi

# 待修改目录名字中的 分隔符 (不能为*)
delimiter='_'
WillBuildDir=./docs/

#
dir_a=(html svg css JS TS browser node package react vue angular vscode webpack rollup youhua yonghutiyan)
dir_b=(database docker go java python rust)
dir_c=(http thought)
dir_d=(all shell software)
dir_e=()
dir_f=()
dir_g=()

# 待处理目标数组
target_dir='dir_'"$type"'[*]'

# 索引
num=1

for name in ${!target_dir}
do  
    # 目标目录
    findDir=`find $WillBuildDir -name $type*$name`
    # 最终名字
    willDir=$WillBuildDir$type$delimiter$num$delimiter$name

    if [ "$findDir" == "$willDir" ]
    then
        echo 相同 $findDir
    else
        mv $findDir $willDir
        echo 修改 $findDir 为 $willDir
    fi
    # 索引+1
    num=`expr $num + 1`
done