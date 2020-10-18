# Vuex

## State
```js
state: {
  count: 0
}
```
### mapState
```js
computed: {
  localComputed () { /* ... */ },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}
```

## Getter
可以认为是 store 的计算属性
```js
getters: {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}
```
### mapGetters
```js
computed: {
// 使用对象展开运算符将 getter 混入 computed 对象中
  ...mapGetters([
    'doneTodosCount',
    'anotherGetter',
    // ...
  ])
}
```

## Mutation
```js
mutations: {
  increment (state) {
    state.count++
  }
}
```
### Mutation Type
```js
export const INCREMENT = 'INCREMENT'
```
```js
import Types as * from './MutationType'

mutations: {
  Types[INCREMENT] (state) {
    state.count++
  }
}
```

## Action
```js
actions: {
  increment (context) {
    context.commit('increment')
  }
}
```