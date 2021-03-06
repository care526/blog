# Vue2.x语法

## Vue提供的方法
- Vue.use()
- Vue.set()
  接受三个参数（作用，修改那些不会触发视图更新的数据的修改）
  参数1：待更新的数据
  参数2：第几项
  参数3：需要修改的值
  ``

## 模版
组件的命名Vue建议小写中间加“-”， care / care-a
```js
export defult {
  name: '',
  mixins: [mixinsA, mixinsB]
  // 为什么要用方法来返回一个data对象呢？
  // 组件可能被多个父组件调用，没有返回的话，会共用data数据，造成影响
  // 用方法返回的话，每个组件的数据是隔离的
  data() {
    name: '',
    care: {
      a: 0
    }
  },
  // 三种props的写法，建议第三种
  props: ['sex', 'name'],
  props: {
    name: string,
    isShow: Boolean
  },
  props: {
    sex: { type: String, defult: 'sex' }
  },
  computed: {
    a() { return false }
  },
  watch: {
    name(val, oldVal) {},
    // 深度监听一个对象
    care: {
      hander() {},
      deep: true,
      immediate: true  // 一般只有属性改变的时候才执行，该属性控制一开始绑定的时候就执行
    }
    // 监听一个对象的某个属性
    'care.a'(val, oldVal) {}
  }
  // 生命周期
  beforeCreate() {
    // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
    // ps：常用于初始化非响应式变量
  },
  created() {
    // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
    // ps：常用于简单的ajax请求，页面的初始化
  },
  beforeMount() {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用
  },
  mounted() {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
    // 该钩子在服务器端渲染期间不被调用
    // ps：常用于获取VNode信息和操作，ajax请求
  },
  beforeUpdate() {
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
    // ps：适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器
  },
  updated() {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之
  },
  activated() {
    // keep-alive 组件激活时调用
  },
  deactivated() {
    // keep-alive 组件停用时调用
  },
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用
    // ps：常用于销毁定时器、解绑全局事件、销毁插件对象等操作
  },
  destroyed() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
    // errorCaptured
    // 当捕获一个来自子孙组件的错误时被调用
  },
  methods: {
    setName() {}
  },
  // 过滤器
  filters: {

  },
  // 组件自定义的指令
  directives: {

  },
  // 如果render函数存在，组件不会去读取template里面的模版
  render() {

  },
  // 引入的组件
  components: {
    ComA: CompC,  // 重命名引入的组件，建议在import的时候做重命名
    ComB
  }
}
```

## 框架提供的指令
- v-text
  将变量的值添加到标签里，无论是什么都添加为字符串
  ```
  <span v-text="msg"></span>
  // 同 <span>{{msg}}</span>
  ```
- v-html
  将变量的值添加到标签里，如果字符串中包含标签，会按照标签来渲染
- v-show
  根据表达式之真假值，切换元素的 display CSS 属性，在DOM树中还存在
- v-if | v-else-if | v-else
  会从文档中删除，DOM树中不存在组件对应的实例DOM
  根据表达式的值的 truthiness 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建
- v-for
  ```
  // 将每一项都是对象的数组，按照列表的方式输出
  <p v-for=''(item, index) in list'' :key=''index''>{{ item.XXX }} - {{ index }}</p>
  // 也可以进行对象的渲染
  <p v-for=''(value, key) in list'' :key=''key''>{{ value }}</p>
  ```
- v-on （缩写 @）
  绑定相应的事件
  ```html
  <button v-on:click=''shijian''></button>
  <button v-on:click.stop=''shijian''></button>   //在后面添加修改器，如：阻止冒泡等
  ```
  ps：父组件监听子组件的事件触发。用自定义组件（第三章5-7，8分钟）
  自定义事件的名称不要写成驼峰模式
- v-once
  组件只初始化一次
- v-model
  数据双向绑定

## 实例属性
- vm.$data
  Vue 实例代理了对其 data 对象属性的访问，只读
- vm.$props
  Vue 实例代理了对其 props 对象属性的访问，只读
- vm.$el
  Vue 实例使用的根 DOM 元素
- vm.$options
  当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处：
  配置对象中自定义的属性，通过该属性访问
- vm.$parent
  当前组件的父实例DOM，如果当前实例有的话
- vm.$root
  当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己
vm.$children
当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的
vm.$slots
vm.$scopedSlots
- vm.$refs
- vm.$isServer
  当前 Vue 实例是否运行于服务器
vm.$attrs
vm.$listeners

## 手动初始化组件
propsData
创建实例时传递props，主要作用是方便测试，只用于 new 创建的实例中
```
import A from './A'
let a = new A({
  propsData: {
    msg: 'hello'
  }
})
```

## 父子组件之间的数据和方法传递调用
```html
<template>
  <子组件 :bc="abc" ref="care" @change="change"></子组件>
</template>
```
```js
export defult {
  data() {
    return {
      abc: 'abc'
    }
  },

  methods: {
    change(a) {},
    success(a) {}
  }
}
```
父元素
```js
this.$refs.care.open({
  abc: this.abc,
  success: this.success
})
```
子元素
```js
methods: {
  open(abc ,success = () => {}) {
    this.abc = abc,
    this.successCallback = success
  }
}
this.$emit("change", this.cba)
```

## 内置的组件
- slot
  ```html
  <slot>no slot</slot>
  ```
  slot标签将子组件中间包含的标签插在slot标签中间，当没有要插入的标签的时候，显示slot标签里的默认值
- keep-alive
  ```html
  <keep-alive></keep-alive>
  ```
  将动态的组件写在这个标签之间，当组件切换的时候，会将前一个组件的内容缓存起来，再切换回来的时候，加快相应速度
- transition
  ```html
  <transition name=“v” mode=“in-out”></transition>
  ```
```html
<style>
.v-enter-active    .v-leace-active   //过渡状态，transtion写在这两个里面
.v-enter    .v-leave     //开始和结尾状态
</style>
```
将需要添加过渡状态的标签放在这个标签里面
只有配合v-if  v-show  :is='XXX'  这三个才会有效果
mode控制多元素的过渡序列
ps：同时还有用js来控制过渡状态，js可以控制的属性多一些
- component
  ```html
  <component :is="currentView"></component>
  ```
  该组件名字跟随变量的改变而改变，变量对应的是一个引入的一个组件
  is接受一个注册了的组件名字，也接受一个导入的组件 如() => import('A')

## key
```html
<li v-for="item in items" :key="item.id"></li>
```
保证一列元素的唯一性

## ref
```html
<div ref="divRef"></div>
```
获取该元素/组件的DOM实例(最好在组件创建成功后引用)

## class
```html
<div class="class1"></div>
<div :class="['class1', { class2: true }]"></div>
```

## render
```js
export default {
  render(h) {
    return h('div', {
      class: {
        btn: true,
        isActive: false
      }
    }, [
      h('img', {
        src: 'asdasd.png'
      })
    ])
  }
}
```

## style 标签

```html
<style>

<style lang="scss">

<style lang="scss" scope>

<style lang="scss" module>

<style lang="scss" module scope>
```

- lang
  设置css的语言
  1. css 默认
  2. scss
  3. less
  4. stylus

- module
  设置样式模块化 .asd -> .asd_hjasd1

- scope
  设置唯一的自定义属性
  `<div data-v-c9844caa></div>`
  1. 当前组件所有标签
  2. 子组件最外层标签会有两个自定义属性，前面一个是子组件的，后一个是父组件的
  3. 子组件的slot内部的标签都会带上这个属性，前面一个是父组件的，后一个是子组件的
  样式优先级相同的情况下，是前面一个自定义属性上面的样式生效


## script标签
```js
<script>
	export default {
		name: 'name',

		components: {},

		props: {},

		data() {
			return {

			}
		},

		
	}
</script>
```

## 配置编写顺序
- name
- components
- mixins
- props
- inject
- provide
- data
- computed
- watch
***
- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave
***
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestroy
- destroyed
- errorCaptured
***
- methods
- filters
- directives












各种选项（选项 / 其他）
delimiters
functional
函数式组件
model
inheritAttrs
comments



v-bind（缩写 ：）
绑定元素的属性
```html
<a v-bind:href="" :title="care"></a>
```
变量的类型为string，直接展现。为数组，为指定多个类名。为对象，根据对象属性的bool值来展现，键名为属性值，bool键值控制属性的展现
可以直接写属性的值
ps：标签的属性最好也是全部小写
```html
<a class="asd"></a>
```
区别，绑定的属性后面的字符串会当作变量，而直接使用的就是字符串
v-model
数据的双向绑定
```html
<input v-model="asd" type="text" />
```
还有单选和多选
v-slot
```html
<my-component v-once :comment="msg"></my-component>
```
组件及其子孙组件只渲染一次，提高页面更新渲染速度





在响应式的数据中，修改不会触发视图更新的有哪些
引用型数据的直接赋值，不会触发视图更新。
使用Vue.set() 方法来修改引用类型的数据
数组的处理函数push pop shift unshift reverse sort的使用会触发视图更新