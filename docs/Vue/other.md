# 其他

## 懒加载
```
component:resolve => require(['@/components/common/main'],resolve)  // AMD风格

// 需要配置webpack的babale插件
const Home =  () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')  // 组件懒加载

component: r => require.ensure([], () => r(require('@/components/home')), 'demo')  // 后面的字符串是chunkName
```

## 注意事项
不要在父级路由的加载逻辑里面去写一些跳转的逻辑，
因为在进入子路由的时候，父组件的所有init代码都会执行一遍

## 指令 & 传参
```
<p v-textPopper="{a: 'a', b: 2}"></p>
<p v-textPopper:{a: 1, b: 2}></p>  # 这种只能传数字
```

```
// 一般用JS事件监听来触发对应的三个函数（全局指令）
Vue.directive('textPopper', {
  bind: function (el, binding, vnode) {  // 绑定触发的函数
    // el: 当前DOM
    // 传入的参数
    // 当前DOM对应的虚拟DOM
  },
  update: function (el, binding, vnode) {  // 更新的时候
    // 
  },
  unbind: function (el, binding, vnode) {  // 解绑的时候
  }
})
```
```
// 局部指令（最后面有个s）
directives: {
  btn: {
    bind: () => {},
    update: () => {},
    unbind: () => {}
  }
}
```

## mixin 全局混入，局部混入
export default {
  install: function (Vue) {
    Vue.mixin({
      data() {
        return {
          
        }
      }
    })
  }
}