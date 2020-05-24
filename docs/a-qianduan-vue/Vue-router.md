# Vue-router

## 引入核心库
```js
import VueRouter from 'vue-router';
//导入全局
Vue.use(VueRouter);
//new一个router
let router = new VueRouter({
  默认为hash模式，使用history模式时需要后端配合  
  mode: 'history',  //模式
  routes: [  //路由匹配
    {path:'/',redirect:'/Foo'},
   {path: '/Foo', component: Foo},
   {path: '/HelloWorld', component: HelloWorld},
  ]
})
//在Vue实例中添加router属性
const app = new Vue ({
  router,  
  render: c => c(App),
})
app.$mount('#app');

//将以下渲染组件添加到挂载点组件中，用于渲染url匹配的路由
//比如以上代码就是添加到App组件中
<router-view></router-view>
```

### 动态路由匹配
```js
{ path: '/user/:id', component: User }
$route.params.id，可以在匹配的每个组件中使用
{ path: '/user/:username/post/:post_id', component: User }
$route.params.username
$route.params.post_id
//建议将带有通配符的匹配放在所有路由的最后
{path: '*'}  //匹配所有路径
{path: 'user-*'}  //匹配user-开头的所有路径
//匹配多级组件
{ path: '/user/:id',
  component: User,
  children: [{
    // 当 /user/:id/profile 匹配成功，
    // UserProfile 会被渲染在 User 的 <router-view> 中
    //在user的组件中要添加<router-view></router-view>
    path: 'profile',
    component: UserProfile
  }
}
 ```

### 路由的跳转
```js
声明式 <router-link :to="...">
编程式router.push(...)
router.push('home') // /home
router.push({ path: 'home' })  // /home
router.push({ name: 'user', params: { userId: '123' }}) // /user/123
router.push({ path: 'register', query: { plan: 'private' }})  // /register?plan=private
const userId = '123'
router.push({ path: `/user/${userId}` }) // -> /user/123
//当参数有path的时候，params会被忽略
router.push({ path: '/user', params: { userId }}) // -> /user

渲染多个组件（给渲染组件带上标示class name），没有name，默认为default
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>

{
  path: '/',
  components: {
    default: Foo,
    a: Bar,
    b: Baz
 }
}

重定向 /a重定向到/b
{ path: '/a', redirect: '/b' }
{ path: '/a', redirect: { name: 'foo' }}
{ path: '/a', redirect: to => {
    // 方法接收 目标路由 作为参数
    // return 重定向的 字符串路径/路径对象
  }
}
```

### router-link
```html
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>
<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>
<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>
<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>
<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

//设置replace属性会将当前history的记录替换为指定的路径
<router-link :to="{ path: '/abc'}" replace></router-link>
//设置append属性会在当前的路径上添加指定的属性 如在/a上跳转/b，实际跳转到了/a/b
<router-link :to="{ path: 'relative/path'}" append></router-link>
//设置tag属性为'li'，渲染为列表标签的形式，默认为'a'
<router-link to="/foo" tag="li">foo</router-link>
//active-class 这个属性看文档
//设置exact，保证路由为一模一样的时候才触发
<router-link to="/" exact>
```

### <router-view>
```html
//当和有一些组件一起使用的时候，要在内层添加keep-alive组件
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
```

### 路由钩子
```js
// to 即将进入的路由
// from 正要离开的路由
// next() 进入下一个路由 | next(false) 中断当前导航，回到from路由 | next('/') 跳转到其他路由
// 这些钩子也可以放在路由中成为单个路由独享的守卫

//全局前置守卫
router.beforeEach((to, from, next) => {})
// 全局解析守卫：在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
router.beforeResolve((to, from, next) => {})
//全局后置钩子
router.afterEach((to, from) => {})

// 组件内部钩子
beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
  next(vm => {
    //在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
    // 通过 `vm` 访问组件实例
  })
}
beforeRouteUpdate (to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`
}
beforeRouteLeave (to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
}
```

### 完整的导航解析流程
- 导航被触发
- 在失活的组件里调用离开守卫
- 调用全局的 beforeEach 守卫
- 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)
- 在路由配置里调用 beforeEnter
- 解析异步路由组件
- 在被激活的组件里调用 beforeRouteEnter
- 调用全局的 beforeResolve 守卫 (2.5+)
- 导航被确认
- 调用全局的 afterEach 钩子
- 触发 DOM 更新
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数

## router属性和方法
### 属性
- app  router的vue根实例
- mode  模式
- currentRoute  当前路由对应的路由信息，相当于route
### 方法
- beforeEach
- beforeResolve
- afterEach
- push
- replace
- go
- back
- forward
- resolve
- addRoutes
  动态添加路由
- onReady
- onError

## router的拆分
- 集中式
  1. 按照路由的分组设置文件夹
  2. 在主文件中引入，concat到总数组中
- 分布式
  1. 每个页面中新建router.js文件
  2. 外层router引入内层router
  2. 最终在主文件中引入，concat到总数组中

## 路由懒加载
```js
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```