# nginx

## 介绍
高性能的http和反向代理服务器  

## 安装
`sudo apt-get install nginx`

## 命令
- nginx -v  
  查看版本  
- nginx -V
  查看版本和安装编译时的选项
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

## nginx.conf文件结构
- main
  - events
  - http
    - upstream
    - server
      - location

## 详细配置
```nginx
# 使用的用户和组
user                            www www;  

# 指定工作衍生进程数
# 每个Nginx进程平均耗费10M~12M内存
# 一般和cpu核心数保持一致
worker_processes                1;  

# pid /var/run/nginx.pid;  # 指定 pid 存放的路径

error_log                       logs/error.log debug;

events {
  # 每个进程的最大连接数，默认是1024
  # 进程的最大连接数受Linux系统进程的最大打开文件数限制
  # ulimit -n 65536  设置最大打开数
  worker_connections          1024;
  # 采用的事件模型 [ kqueue | rtsig | epoll | /dev/poll | select | poll ]
  # select和poll都是标准的工作模式
  # kqueue(BSD)和epoll(Linux)是高效的工作模式
  use                         epoll;
}


http {
  # 请求体的类型
  include                     mime.types;
  # 设定默认类型为二进制流(当文件类型未定义时)
  default_type application/octet-stream;


  # 指定每个 TCP 连接最多可以保持多长时间，默认是75s，设置为0代表关闭该设置
  # 不断的创建销毁tcp连接、长时间的保持tcp连接  都是消耗资源的，所以需要平衡
  keepalive_timeout           60s;
  # 指定客户端与服务端建立连接后发送 request body 的超时时间
  # 客户端在指定时间内没有发送任何内容，Nginx 返回 HTTP 408（Request Timed Out）
  client_body_timeout         20s;
  # 客户端向服务端发送一个完整的 request header 的超时时间
  # 客户端在指定时间内没有发送一个完整的 request header，Nginx 返回 HTTP 408（Request Timed Out）
  client_header_timeout       10s;
  # 服务端向客户端传输数据的超时时间
  send_timeout                30s;


  # 开启gzip压缩
  gzip                        on;
  # 允许压缩的页面最小字节数，页面字节数从header头的Content-Length中获取
  # 默认值是0，建议设置成大于1K的字节数，小于1K可能会越压越大
  gzip_min_length             1k;
  # 申请4个单位为16K的内存作为压缩结果流缓存
  # 默认值是申请与原始数据大小相同的内存空间来存储gzip压缩结果
  gzip_buffers                4 16k;
  # 识别HTTP协议版本，默认是1.1
  gzip_http_version           1.1;
  # 指定GZIP压缩比
  # 1 压缩比最小，处理速度最快；9 压缩比最大，传输速度快，但处理最慢，也比较消耗cpu资源
  gzip_comp_level             2;
  # 指定压缩的类型，无论是否指定，“text/html”类型总是会被压缩的
  gzip_types                  text/plain application/x-javascript text/css application/xml;
  # 让前端的缓存服务器缓存经过GZIP压缩的页面
  gzip_vary                   on;


  # 负载均衡
  upstream linuxidc { 
    server 10.0.6.108:7080 weight=5;
    server 10.0.0.85:8980; 
  }


  # 虚拟主机开始
  server {
    # 服务端口
    listen                  80;
    # IP地址或者域名(多个之间用空格分开)
    server_name             localhost 192.168.8.18 care.com;

    # 访问的默认首页地址
    index                   index.html index.htm index.php;
    # 虚拟主机的网页根目录
    root                    /wwwroot/www.cszhi.com
    # 网页的默认编码格式
    charset                 gb2312;
    
    # 虚拟主机的访问日志存放路径
    # 路径后面的main是输入格式(在上面定义的)
    access_log              logs/www.ixdba.net.access.log main;

    # 匹配优先级
    # 精确匹配  >  前缀匹配  >  正则匹配  > 正常匹配  > 全匹配
    # 正则匹配成功之后停止匹配，非正则匹配成功还会接着匹配
    # 在所有匹配成功的url中，选取匹配度最大的url字符地址

    # 精确匹配  ( = )
    location = /demo {}
    # 前缀匹配  ( ^~ )
    location ^~ /demo {}
    # 正则匹配  ( ~ )
    location ~ /[0-9]emo {}
    # 正常匹配
    location /demo {}
    # 全匹配
    location / {}

    location / {
      index                   
      root                    /web/wwwroot/www.cszhi.com;
      expires                 30d;
      proxy_pass              http://localhost:8080;
    }




    location / {
        root   html;
        index  index.html index.htm;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
  }
}
```
[参考文章](https://blog.csdn.net/wangbin_0729/article/details/82109693)















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


