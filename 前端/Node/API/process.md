## 说明
是全局对象，也可以通过require引用使用，保存的是当前进程的相关信息

## 属性
- process.argv  # 命令行参数数组，一般我们从第三个参数开始获取
  ```
  node care.js a b c d=1

  ['/usr/local/bin/node',
  '/Users/morika/Desktop/my-project/nodeTest/test/care.js',
  'a',
  'b',
  'c',
  'd=1']
  ```
  argv[0]: node解释器的路径
  argv[1]: 当前进程启动的文件路径
  argv[X]: 其他参数
- process.arch  # 操作系统 CPU 架构的字符串
- process.config  # 用于编译当前 Node.js 可执行文件的配置选项的 JavaScript 表示形式

## 方法
- process.abort() 
  方法会使 Node.js 进程立即结束
- process.chdir(directory)
  变更 Node.js 进程的当前工作目录
- process.cwd()
  返回 Node.js 进程的当前工作目录




## 没有弄懂的
process.allowedNodeEnvironmentFlags