### 启动
```
pm2 start app.js
pm2 start app.js --name myApp  # 设置别名
pm2 start app.js -i 0  # 根据CPU核数启动进程个数
pm2 start app.js --watch  # 实时监控app.js的变动，自动reload
```

### 查看
```
pm2 list  # 查看所有
pm2 show name|id  # 显示指定进程的详细信息
pmw info name|id  # 显示指定进程的详细信息
```

### 监控
`pm2 monit  # 监控，查看服务器信息`

### 停止
`pm2 stop name|id|all  # 停止指定的进程｜所有进程`

### 重载
`pm2 reload name|id|all  # 重载指定的进程｜所有进程`

### 重启
`pm2 restart name|id|all  # 重启指定的进程｜所有进程`

### 删除
`pm2 delete name|id|all  # 删除指定的进程｜所有进程`

### 日志
```
pm2 logs [--raw]  # 以流的形式在屏幕上打印所有日志
pm2 flush  # 清空所有日志
pm2 reloadLogs  # 重载所有日志
```

### 自定义启动文件
？？？？