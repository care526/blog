# 类组件

```jsx
import React from 'react'

class Student extends React.Component {
	// 设置props的默认值
	static defaultProps = {
		name: 'asd',
		age: 18
	}

	constructor(props) {
		super(props)

		this.state = {
			sex: 'man'
		}

		// 保证方法中的上下文是当前类实例
		this.setSex = this.setSex.bind(this)
	}

	setSex() {
		this.setState({
			sex: 'woman'
		})
	}

	setAge() {
		this.setState({
			age: 20
		})
	}

	render() {
		const { sex } = this.state
		const { name, age } = this.props

		return (
			<div>
				<p onClick={ this.setSex }>{ name }</p>
				{ /* '使用箭头函数的方式可以不用bind(this)' */ }
				<p onClick={ () => this.setAge() }>{ name }</p>
			</div>
		)
	}
}
// 设置props的默认值 方式二
Student.defaultProps = {
	name: 'asd'
}
```

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
3. 类组件中的事件需要bind(this)，使用箭头函数的可以不bind
   ```jsx
   <div onClick={this.clickHandle.bind(this, 2)}></div>
   clickHandle(id) { // xxx }
   ```