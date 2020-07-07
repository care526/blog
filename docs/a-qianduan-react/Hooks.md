# Hooks

## 出现原因、解决的问题
### class的组件复用问题
高阶函数和props传值会导致组件的标签层级过多
### 生命周期
部分逻辑需要在componentDidMount和componentDidUpdate都写一遍  
生命周期钩子的里面的代码逻辑多了就会很混乱
### 函数this的指向问题
类方法的声明需要显式的绑定当前类对象，不然函数的传递，this的指向就会不是该类对象
****

## 使用规则
- 只能在顶层(也就是函数的外层调用)
- 不能在流程和判断语句中调用
****

## 基础 Hooks
### usestate
```jsx
import React, { useState } from 'react'
const [state, setstate] = useState(initState)
```

### useEffect
```jsx
import React, { useEffect } from 'react'
useEffect(() => {
  // XXX
  return () => {
    // XXX 解绑函数，就是上一个effect解绑的时候触发的函数
  }
}, [state, ...])
```
接受一个函数和一个可选数组
1. 第二个参数没有的时候，组件的任何变化都会触发
2. 第二个参数为空数组[]，只在组件初始化的时候执行一次
3. 第二个参数的数组中有值，当该值变化的时候，执行
返回的一个函数为解绑函数，当组件卸载的时候需要将代码的部分副作用清除

### useContext
```jsx
import React, { createContext, useContext } from 'react'

// 夫组件中
const CountContext = createContext() // 创建context
<CountContext.Provider value={ count }>  传递待监听的数值
  <我是子组件 CountContext={ CountContext } />
</CountContext.Provider>

// 子组件中
function Care(props) {
  const { CountContext } = props
  const count = useContext(CountContext)
  return <div>{ count }</div>
} 
```
****

## 高阶 Hooks
### useRef
```jsx
import React, { useRef } from 'react'
const inputEl = useRef(null)
<input ref={inputEl} type="text"/>
```

### useMemo
```jsx
// 用于性能优化
// 监听count的变化，如果改变了就执行，并返回一个实时计算的返回值
// 有点类似于vue吗compluted属性，但是并没有那么多的拘束
import React, { useMemo } from 'react'

const otherName =  useMemo(() => {
  console.log(count)
  return count + 1
}, [count])
```

### useCallback
```jsx
// 同useMemo，但接受的第一个函数参数的调用方式不同，useCallback直接返回传入参数的返回值
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
import React, { useCallback } from 'react'

const otherName =  useCallback((() => {
  console.log(count)
  return count + 1
})(), [count])
```

### useReducer
```jsx
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const [state, dispatch] = useReducer(reducer, initialState)

// 调用方式, dispatch是可以传递给子组件的
return (
  <button onClick={() => dispatch({type: 'decrement'})}>-</button>
)
```
****

## 自定义Hooks
### 规则
- 函数开头为use开头

```jsx
import { useState, useEffect } from 'react'

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)
    }
  })

  return isOnline
}
```