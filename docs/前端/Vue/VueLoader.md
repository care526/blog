# Vue-loader

在style scoped模式下影响子组件的样式
```css
// 某些预编译器sass less可能不支持 >>>,后两个是它的别名
.a >>> .b { /* ... */ }
.a {
  ::v-deep .b { /* ... */ }
}
.a {
  /deep/ .b { /* ... */ }
}
// 都会编码为以下代码
.a[data-v-f3f3eg9] .b { /* ... */ }
```