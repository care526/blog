# Vue3.0语法

```vue
<template>
  <!-- 这是组件的引用，普通的标签的用法一样 -->
  <TemplateRefTwo ref="comRef" />
</template>

<script>
import { ref, toRefs, isRef,
  reactive, computed, watch, 
  provide, inject
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured
} from '@vue/composition-api'

export default createComponent({
  // 入口文件，在组件挂载完成之前执行
  // 接受的属性，上下文对象(代替this)
  setup(props, context) {
    // context.emit()

    // 在父组件中使用，向下传递参数
    provide('globalColor', 'red')
    // ----------------------------------------------------------------------------------
    // 在子组件中调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const themeColor = inject('globalColor')
    // ----------------------------------------------------------------------------------
    // 根据给定的值，创造一个响应式的数据对象(只有一个value属性)
    const count = ref(0)
    // ----------------------------------------------------------------------------------
    // 创建DOM元素的引用
    context.refs.comRef
    // ----------------------------------------------------------------------------------
    // 判断变量是否是ref构造的
    const unwrapped = isRef(foo) ? foo.value : foo
    // ----------------------------------------------------------------------------------
    // 接受一个普通对象，返回一个响应式的对象
    const state = reactive({
      count: 0
    })
    // ----------------------------------------------------------------------------------
    // 计算属性,返回值是一个ref的实例(只读)
    const double = computed(() => state.count * 2)
    // 创建一个 computed 计算属性(可读写)
    const plusOne = computed({
      // 取值函数
      get: () => count.value + 1,
      // 赋值函数
      set: val => { count.value = val - 1 }
    })
    // ----------------------------------------------------------------------------------
    // watch属性
    watch(() => {
      document.body.innerHTML = `count is ${state.count}`
    })
    // 手动清除监视(在组件销毁的时候，会自动清除))
    const stop = watch(() => {}) // 创建
    stop()  // 清除
    // 监视 state.count 这个数据节点的变化
    watch(() => state.count, (count, prevCount) => { /* ... */ })
    / 指定要监视的数据源
    watch(count, (count, prevCount, onCleanup) => { 
      /* ... */
      // 如果 watch 监听被重复执行了，则会先清除上次未完成的异步任务
      onCleanup(() => clearTimeout(timerId))
    })
    // 监听多个reactive的数据
    watch(
      [() => state.count, () => state.name],    // Object.values(toRefs(state)),
      ([count, name], [prevCount, prevName]) => {
        console.log(count)         // 新的 count 值
        console.log(name)          // 新的 name 值
        console.log('------------')
        console.log(prevCount)     // 旧的 count 值
        console.log(prevName)      // 新的 name 值
      },
      {
        lazy: true // 在 watch 被创建的时候，不执行回调函数中的代码
      }
    )
    // 监听多个ref类型的数据
    watch(
      [count, name], // 需要被监视的多个 ref 数据源
      ([count, name], [prevCount, prevName]) => {
        console.log(count)
        console.log(name)
        console.log('-------------')
        console.log(prevCount)
        console.log(prevName)
      },
      {
        lazy: true
      }
    )
    // ----------------------------------------------------------------------------------
    onBeforeMount(() => {})
    onMounted(() => {})
    onBeforeUpdate(() => {})
    onUpdated(() => {})
    onBeforeUnmount(() => {})
    onUnmounted(() => {})
    onErrorCaptured(() => {})
    // ----------------------------------------------------------------------------------
    // 对外暴露的变量
    reutrn {
      state,
      care: ref(2),
      ...toRefs(state),  // 将state上的所有属性都转化为ref类型的响应式数据
    }
  }
})
</script>
```