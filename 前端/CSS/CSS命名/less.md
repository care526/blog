## 使用
1. 直接使用
```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.8.1/less.min.js" ></script>
```
将less文件放在脚本的前面    
2. 做打包转换为css文件使用  
```
npm install -g less
lessc styles.less styles.css
```
3. 安装less-loader，在webpack中处理less文件   

## 嵌套
```
#banner {
  position: fixed;
  .content {
    width: 20px;
    div {
      &:nth-of-type(2),
      &:nth-of-type(2) {
        > span {

        }
      }
      }
    }
    a {
      &:hover {

      }
    }
  }
}
```

## 注释
单行 & 多行  
```
// XXX
/* XXX */
```
## 导入
- 在style中：`@import “care.less”`  
- 在script中：`import "care.less"`  
