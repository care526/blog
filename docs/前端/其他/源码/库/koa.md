# koa

## use函数
```js
// fu必须是函数
// Generator函数会被转成async函数
// fn(ctx, next) {} 支持两个参数
use(fn) {
	this.middleware.push(fn);
	return this;
}
```

## koa-compose
```js
// middleware是async的函数数组
function compose(middleware) {
	return function(ctx, next) {
		let index = -1
		function dispatch(i) {
			index = i
			let fn = i === middleware.length
				? next
				: middleware[i]
			// middleware中的函数可以不传next参数，自动结束
			// 如果next不传，该不传的函数后面的中间件将不会执行
			if (!fn) return Promise.resolve()
			try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
		}
		return dispatch(0)
	}
}
```