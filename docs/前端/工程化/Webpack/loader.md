# loader

## 使用
```JS
module.exports = {
  module: {
    rules: [
      // 单一使用
      { test: /\.css$/, use: 'css-loader' },
      // 增加参数
      {
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'file-loader',
            option: {
                name: '[name].[ext]',
                outputPath: 'images/'
            }
        }
      },
      // 多loader处理
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
                loader: css-loader,
                option: {
                    importLoaders: 2,
                    modules: true
                }
          },
          'sass-loader'
        ]
      },
    ]
  }
};
```

## loader生效顺序
- 从右到左
- 从下到上
总的来说就是数据的后面倒着依次执行

## loaders
- style-loader  
  将模块的导出作为样式`<style>`添加到 DOM 中
- css-loader  
  解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
  ```js
  {
    test: /\.(css)$/,
    use: [
      'style-loader',
      {
        loader: css-loader,
        option: {
          importLoaders: 1, // 在 css-loader 前应用的 loader 的数量
          modules: true  // css 模块化
        }
      }
    ]
  },
  ```
- less-loader
  加载和转译 less 文件  
- sass-loader 
  加载和转译 sass/scss 文件
- postcss-loader  
  加载和转译 CSS 文件
  ```js
  {
    test: /\.(css)$/,
    use: [
      {
        loader: postcss-loader,
        option: {
          plugins: (loader) =>  [
            require('postcss-import')({ root: loader.resourcePath }),
            require('postcss-cssnext')(),
            require('autoprefixer')(),  // 自动添加浏览器前缀
          ]
        }
      }
    ]
  },
  ```
- stylus-loader  
  加载和转译 Stylus 文件
***
- file-loader  
  将文件发送到输出文件夹，并返回（相对）URL  
  默认情况下，生成的文件的文件名就是文件内容的 MD5 哈希值并会保留所引用资源的原始扩展名  
  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name][hash].[ext]',  // string function
                context: '',  // 默认为 webpack.config.js context
                publicPath: 'assets/',  // 为你的文件配置自定义 public 发布目录
                outputPath: 'images/',  // 为你的文件配置自定义 output 输出目录
                useRelativePath: process.env.NODE_ENV === "production",
                // 默认情况下会生成文件，可以通过将此项设置为 false 来禁用（例如使用了服务端的 packages）
                emitFile: false
              }
            }
          ]
        }
      ]
    }
  }
  ```
- url-loader  
  像 file loader 一样工作，但如果文件小于限制，可以返回 data URL  
  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024,  // 将文件作为数据URL内联的字节限制
                mimetype: 'image/png',  // 设置文件的MIME类型，默认使用文件扩展名查找
                fallback: 'responsive-loader'，  // 超过文件大小时，使用的loader
              }
            }
          ]
        }
      ]
    }
  }
  ```
- json-loader  
  加载 JSON 文件（默认包含）
***
- ts-loader 或 awesome-typescript-loader  
  像 JavaScript 一样加载 TypeScript 2.0+
- babel-loader  
  加载 ES2015+ 代码，然后使用 Babel 转译为 ES5
  ```js
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              "@babel/preset-env", {
              targets: {
                chrome: "67"  // 指定代码将会运行的浏览器的版本,还可以添加其他浏览器
              }
              useBuiltIns: "usage"  // 按需添加需要的新特性补充
            }],
              "@babel/preset-react"  // 处理jsx文件
            ],
            plugins: [require('@babel/plugin-transform-object-rest-spread')]
          }
        }
      }
    ]
  }
  ```
***
- pug-loader  
  加载 Pug 模板并返回一个函数
- markdown-loader  
  将 Markdown 转译为 HTML
- react-markdown-loader  
  使用 markdown-parse parser(解析器) 将 Markdown 编译为 React 组件
***
- vue-loader  
  加载和转译 Vue 组件

## 占位符
- [ext]  
  资源扩展名
- [name]  
  资源的基本名称
- [path]  
  资源相对于context的路径
- [hash]  
  内容的哈希值