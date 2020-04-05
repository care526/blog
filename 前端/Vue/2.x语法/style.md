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
