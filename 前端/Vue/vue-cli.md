```
module.exports = {
  baseUrl: './',
  publicPath: './',

  devServer: {
    proxy: 'http://localhost:4000',

    proxy: {
      '/api': {
        target: 'http://localhost:4000'
      }
    }
  },

  configureWebpack: {

  },

  chainWebpack: () => {

  }
}
```