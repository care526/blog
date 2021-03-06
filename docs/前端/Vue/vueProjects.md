# 项目结构设计

## 全局的命名空间
有的时候会使用到全局的变量
不是说会污染全局的变量空间就不使用
而是按照项目的设计，初始化一个专属的对象当作命名空间
项目所需的全局变量都设置到该对象中

## 路由 & 权限
- 模块化
  按照项目页面的种类进行分组在modules目录中，分别导出
  统一引入index.js
- 懒加载，按照页面的分类，设置 /* webpackChunkName: "group-foo" */
  `const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')`
- 将需要鉴权的路由设置meta元信息
  ```
  meta: {
    title: '选择店铺',  // 一般用于设置document.title
    auth: true,  // 是否需要鉴权
    code: 5  // 当前页面的权键的代表值
  }
  ```
  在 beforeEach 全局路由守卫中判断是否可以进入
  ```
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {  // 路由发生变化修改页面title
      document.title = to.meta.title
    }
    if (checkout(to, from, next)) {
      next()  // 通过权键，进入页面
    } else {
      next({  // 不允许进入，进入指定的页面(如无权限的专门的页面，上面有返回和首页等跳转，返回跳转到进入权键失败前的那个页面)
        path: 'xxx/xxxx'
      })
    }
  })
  ```
  一般将各个需要权键页面的code统一存起来，比如一个用户可进入的页面的权限为: 1,2,3,4,6,7,9....
  那么只需要判断该页面的code是否存在与用户的权限的数据中就可以了
  如果需要更细粒度的权限控制，比如某一页面的部分是否可见

## 待打包的系统变量(根据环境的不同，配置不同的变量)
VUE_APP_XXX  # 以这个开头的变量会被打包

## 登录状态
- cookie
  后端设置cookie，cookie会随着每次的请求头中带到后端
  接口报错，跳转到登录界面
- token
  当第一次登录系统的时候，后端将token发送过来，前端存在sessionStorage中
  每一次请求将token带在接口里面，后端对其进行校验
  登出系统或者接口401/403报错的时候，清除token并跳转到登录界面


## css模块的编辑
最外层组件使用id来控制保证不被外界的css样式干扰

## 项目优化
- 打包
  1. 启用路由懒加载
  2. 将公共的库文件提取出来，如vue vue-router vuex等
  3. 开启gzip

## 加载动画
在body中设置一个加载DOM，在进入系统前将该DOM元素隐藏

## 代码审核
提审前需要自己审核代码
代码设计需要提前讨论，避免审核时出现结构问题，重做
审核的代码块需要小，量大了对于审核者十分不友好