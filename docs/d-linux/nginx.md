# nginx

## 介绍
高性能的http和反向代理服务器  

## 安装
`sudo apt-get install nginx`

## 命令
- nginx -v  
  查看版本  
- nginx -t  
  测试配置文件格式是否正确，显示配置文件的位置  
- nginx  
  启动  
- nginx -s reload  
  重新加载配置文件
- nginx -s reopen  
  重启
- nginx -s stop  
  停止  

## 目录文件
1. 文件
   - nginx.conf  
      配置文件
2. 目录
   - conf.d
      子server文件目录

## 原理

## 详细配置
```nginx
worker_processes auto;

events {
}

http {
  upstream backend {

  }

  server {
    location / {

    }
  }
}
```















反向代理
代理服务器就是正向代理

负载均衡
upstream myserve {
    ip_hash;
    server 192.168.0.1:8000 weight=5;
    server 192.168.0.1:8001;
    fair;
}
- 轮训 自动剔除宕机的
- 权重
- hash
- 响应时间

动静分离

高可用
开启多台nginx服务器
用守护进程的方式，来设置如果主nginx挂掉了，将对外的ip映射到副nginx上





配置文件
- 全局
- event
- http
  - 全局快
  - server块
    - 全局
    - localtion

localtion的匹配的正则表达式

集群的配置

 

为服务器上的某个文件夹开启静态资源服务器服务
location / {
    root   /Users/morika/Desktop/projects/senguo-merchantcenter-frontend/;
    index  index.html index.htm;
}


