# global

- console
  log  # 普通输出
- global
  相当于浏览器的window
- process  # 当前node进程的对象
  - process.argv  # 命令行参数数组，一般我们从第三个参数开始获取
    ```
    node argv.js 1991 name=byvoid --v "Carbo Kuo"
    // ['node', '/home/byvoid/argv.js', '1991', 'name=byvoid', '--v', 'Carbo Kuo']
   
    ```
- require()
- setTimeout(callback, delay[, ...args])
- clearTimeout(timeoutObject)
- setInterval(callback, delay[, ...args])
- clearInterval(intervalObject)
- setImmediate(callback[, ...args])
- clearImmediate(immediateObject)