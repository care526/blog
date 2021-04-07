# Dockerfile

## FROM
设置基础镜像
`FROM nginx`

## WORKDIR
设置工作目录，只有这个目录在docker镜像构建的过程中是每层都可见的
`WORKDIR /code`

## ENV
设置环境变量
`ENV NODE_VERSION 7.2.0`

## COPY
COPY 源路径 目标路径
`COPY ./a.js /root/project/`
如果目标路径不存在，会自动创建

## RUN
`RUN <命令行命令>`
`RUN node ./test.js dev`
`RUN ["node", "./test.js", "dev"]`
每执行一次RUN指令就会在docker上新建一层  
如果有多个命令需要执行，可合并
```
RUN yum install wegt &&
    wegt -O redis.tar.gz "xxxxxxxxxxxxxx" &&
    xxx xxx
```

## EXPOSE
仅仅是声明对外的端口，并不是实际容器在运行中对外暴露的端口 
帮助使用者理解这个镜像的守护端口   
真真容器对外的端口是`docker run`时指定的  
若不指定，将会随机映射到该声明的端口上
`EXPOSE 8080 80`  
多个端口中间用空格分隔  

## CMD
如果文件中存在多个CMD指令，只有最后一个CMD指令生效
`CMD ["node", "./test.js", "dev"]`

