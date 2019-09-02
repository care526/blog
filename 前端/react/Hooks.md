## usestate
```
const [state, setstate] = useState(initState)
```

## useEffect
```
useEffect(() => {
  // XXX
  return () => {
    // XXX 解绑函数，就是上一个effect解绑的时候触发的函数
  }
}, [state, ...])
```
接受一个函数，当第二个参数里的变量变化时才执行。组件在初始化的时候会执行
如果第二个参数为空，只会在组件初始化的时候执行一次
如果没有第二个参数，每次都执行

## useContext
```

```