# loader

## 常用的loader
```
npm install --save-dev css-loader
npm install --save-dev ts-loader
```

可以为一种文件设置多个loader
```
module.exports = {
  module: {
    rules: [
      {  // 打包到打包目录
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'file-loader',
            option: {
                name: '[name].[ext]',  // 转换为文件与源文件同名
                outputPath: 'images/'  // 打包到打包目录的images目录下
            }
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'url-loader',
            option: {
                name: '[name].[ext]',  // 转换为文件与源文件同名
                outputPath: 'images/',  // 打包到打包目录的images目录下
                limit: 2048  // 当图片小于2048字节,将图片转化为base64放到js文件中
            }
        }
      },
      {  // 处理字体文件
        test: /\.(eot|ttf|svg)$/,
        use: {
            loader: 'file-loader'
        }
      },
      {  // 要提前安装sass-loader和node-sass
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
                loader: css-loader,
                option: {
                    importLoaders: 2, // 保证样式文件中引用的样式文件也可以按照loader的先后顺序处理
                    modules: true
                }
          },
          'sass-loader'
        ]
        // loader的执行顺序的是从下到上,从右到左
        // postcss-loader 这也是一个css的处理loader
      },
      {  // 将ES6语法转化为ES5的语法
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        option: {
          preset: [[
            "@babel/preset-env", {
            targets: {
              chrome: "67"  // 指定代码将会运行的浏览器的版本,还可以添加其他浏览器
            }
            useBuiltIns: "usage"  // 按需添加需要的新特性补充
          }],
            "@babel/preset-react"  // 处理jsx文件
          ]
        }
        // 补充低版本浏览器的新特性用@babel/polyfill,在主js文件的最上面引用`import "@babel/polyfill"`
      }
    ]
  }
}
```

## 写法

## loader生效顺序
- 从右到左
- 从下到上

## loaders
- css-loader
- file-loader
- url-loader