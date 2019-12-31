# 规则
- 只能在顶层(也就是函数的外层调用)
- 不能在流程和判断语句中调用

# 基础 Hooks
## usestate
```
import React, { useState } from 'react'
const [state, setstate] = useState(initState)
```

## useEffect
```
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

## useContext
```
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

# 高阶 Hooks
## useRef
```
import React, { useRef } from 'react'
const inputEl = useRef(null)
<input ref={inputEl} type="text"/>
```

## useMemo
```
// 用于性能优化
// 监听count的变化，如果改变了就执行，并返回一个实时计算的返回值
// 有点类似于vue吗compluted属性，但是并没有那么多的拘束
import React, { useMemo } from 'react'

const otherName =  useMemo(() => {
  console.log(count)
  return count + 1
}, [count])
```

## useCallback
```
// 同useMemo，但接受的第一个函数参数的调用方式不同，useCallback直接返回传入参数的返回值
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
import React, { useCallback } from 'react'

const otherName =  useCallback((() => {
  console.log(count)
  return count + 1
})(), [count])
```

## useReducer
```
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