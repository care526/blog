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
接受一个函数，当第二个参数里的变量变化时才执行和组件在初始化的时候会执行
如果第二个参数为空，只会在组件初始化的时候执行一次
如果没有第二个参数，每次都执行

## useContext
```
import React, { createContext, useContext } from 'react'
const CountContext = createContext()
<CountContext.Provider value={count}>
  <我是子组件 />
</CountContext.Provider>
// 子组件里面
const count = useContext(CountContext)
```

## useReducer
```
import React, { useReducer } from 'react'
const [count, dispatch] = useReducer((state,action)=>{
  switch(action){
    case 'add':
      return state+1
    case 'sub':
      return state-1
    default:
      return state
  }
},0)
```

## useRef
```
import React, { useRef } from 'react'
const inputEl = useRef(null)
<input ref={inputEl} type="text"/>
```