# curl

```bash
curl [options] [URL...]

# 打印返回文件内容
curl baidu.com
## 追踪重定向
curl -L google.com

# 下载文件
## 自定义文件名
curl -o vue-v2.6.10.js https://cdn.jsdelivr.net/npm/vue/dist/vue.js
## 原始文件名
curl -O https://cdn.jsdelivr.net/npm/vue/dist/vue.js
## 网断了，继续下载之前没下完的文件
curl -C - -O https://cdn.jsdelivr.net/npm/vue/dist/vue.js

# 打印请求头
curl -I https://www.ubuntu.com/
## 如果支持http2
curl -I --http2 https://www.ubuntu.com/
```
