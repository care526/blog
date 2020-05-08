# 类组件

## State
1. 不可变值
2. 异步更新
3. 类似的更新可能会被合并
4. 可以直接修改state，但是不会触发更新
```js
this.setState((prevState, props) => {
    return {
        count: prevState.count + 1
    }
})
```
```js
this.setState({
    count: 1
}, () => {
    // 打印更新后的值，类似vue $nextTick()
    console.log(this.state.count)
})
```

## 事件
1. Event对象是React封装过的SynthetticEvent，标准了事件对象，在不同浏览器都会得到相同的属性
2. React中事件触发的对象都是document，所有事件都被挂载到document上
3. 类组件中的事件需要bind this
   ```jsx
   <div onClick={this.clickHandle.bind(this, 2)}></div>
   clickHandle(id) { // xxx }
   ```
## 生命周期
### 加载
- constructor
- getDefaultProps
- getInitialState
- getDerivedStateFromProps (新增)
- componentWillMount (弃用)
- render
- componentDidMount
### 更新
- componentWillReceivePorps (弃用)
- shouldComponentUpdate
- getSnapshotBeforeUpdate (新增)
- componentWillUpdata (弃用)
- render
- componentDidUpdate
### 卸载
- componentWillUnmount