是什么
高性能的http和反向代理服务器 

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

安装

命令
nginx -v
nginx  # 启动
nginx -s stop  # 停止
nginx -s reload  # 重新加载

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

原理
 

为服务器上的某个文件夹开启静态资源服务器服务
location / {
    root   /Users/morika/Desktop/projects/senguo-merchantcenter-frontend/;
    index  index.html index.htm;
}