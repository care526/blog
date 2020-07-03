# 项目规范

## 项目结构
- .vscode  // vscode的配置文件
- builds  // 打包相关文件
	- webpack.dll.js
	- build.sh
- dev_config  // 本地开发配置
- dist  // 打包目录
- node_modules  // 依赖包
- public  // html静态文件
  - index.html
	- favicon.ico
- src  // 源代码
	- api  // 请求库的二次封装
  	- config  // api配置文件，域名应该从环境
	- assets
		- images  // 图片
		- style  // 样式
			- index.scss  // 将所有scss统一导出，将所有scss在index里面引入
			- reset.css  // 浏览器样式统一文件
			- override_element_ui.scss  // 修改框架的默认样式
			- meta.scss  // 原子类
			- commo.scss  // 全局的公共样式
		- json
	- config  // 全局的配置，可以按分类建立各个文件
		- domain.js  // 如：系统域名配置
		- qiniu.js  // 如：七牛云配置
	- directives  // 全局的指令，可以按照分类建立各个文件，在main.js里面引入
	- filters  // 全局过滤器，可以按照分类建立各个文件，在main.js里面引入
	- components  // 全局提取的组件
		- base  // 全局注册的组件
		xxx.vue  // 需要引入使用的全局组件
	- router
		- modules
			- router1.js  // 板块1的路由，当然也可以非集中存储，放到各个板块的目录里面通过require.context获取导入
		- index.js  // 主路由文件
	- store
		- modules
		  - store1.js
			- store2.js
		- index.js  // 主文件
	- utils  // 工具函数，可以按分类建立各个文件 ( 只有一个index.js合适函数较少的时候 )
  	- utilA.js
  	- utilB.js
	- views  // 页面
		- pageName  // 每一个板块
			- components  // 该板块独有的组件或者提取的公共模块
			- module  // 大的模块，一般是该页面的二级路由对应的vue文件
		- xxx.vue  // 当前板块的主页面
	- App.vue
	- main.js
- .env  // 全部环境公共变量
- .env.development  // 本地环境变量
- .env.uat  // 测试服环境变量
- .env.gray  // 灰度环境变量
- .env.pro  // 正式环境变量
- .gitignore  // git忽略文件
- babel.config.js  // babel配置文件
- vue.config.js  // vue-cli配置文件
- package.json
- package-lock.json
- yarn.lock
- README.md  // 项目readme

## 各个环境配置 ( 开发/测试/灰度/线上 )
```
npm run build --mode uat --no-clean
npm run build --mode production
// .env  # 公共参数
// .env.development  # 开发环境
// .env.uat  # 测试环境
// .env.gray  # 预发布版本(灰度)
// .env.production  # 生产环境
```

## vue文件目录结构
```vue
<template></template>

<script>
// function
import dayjs from 'dayjs'  // 第三方库
import { formatNum } from '@/utils'  // 全局工具函数
import { radom } from './xxx.js'  // 局部工具函数
// components
import { Toast } from 'vant';  // 第三方组件
import Dialog from '@/components/Dialog.vue'  // 全局组件
import Card from './components/Card.vue'  // 自有组件
// 静态文件
import jsons from 'xxx.json'
import img from './xxx.png'

export defult {
	mixins: [],
	components: {},
	// 数据
	props: {},
	inject: [],
	provide: {},
	data () {},
	computed: {},
	watch: {},
	// 声明周期钩子
	created () {},
	mounted () {},
	directives () {},
	filters () {},
	methods () {},
}
</script>

<style>
</style>
```