# typescript编译器

## 命令
tsc
默认编译该目录下的所有文件
```bash
tsc a.ts
tsc ./src/*.ts
```

## 参数
- 在监视模式下运行编译器
  ```bash
  tsc -w
  tsc --watch
  ```
- 版本号
  ```bash
  tsc -v
  tsc --version
  ```
- 指定编译加载tsconfig.json
  ```bash
	tsc -p filePath/dirPath
	tsc --project file/dirPath
  ```
	指定配置文件地址/含有tsconfig.json的目录
