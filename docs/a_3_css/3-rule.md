# css命名规则

## PS
所有的方法应该是交叉合理使用  
达到不会冲突的目的即可

## 命名空间
在每一个组件的最外层包一层唯一的类名
```
.componentA {
  .title {}
  > img {}
}
```

## BEM规范 -> 一套命名规范
- B 块
- E 元素
- M 修饰符
BEM的命名规矩很容易记：block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名  
一般适合UI框架

## OOCSS
结构和内容分离 容器和皮肤分离
- 结构：布局相关的属性
- 皮肤：容器的样式，如圆角，背景，边框等
- 内容：容器内部的具体标签的样式，如文件的大小，颜色，粗细等

## SMACSS
将公共的样式抽离出来放到对应的文件
- base 基础样式
- layout 布局，结构相关的样式
- module 各个页面对应的私有样式
- state 状态的样式，如按钮，消息提示 ( 警告，危险，提示，通过 )
- theme 主题，页面需要多种样式皮肤

## MetaCSS
原子类，无语义的类，适合类的组合
经过我学习，对于这种无语义类的使用还是应该是谨慎
对于多人开发不是很友好，前期开发是很快，写的css代码会少一些
后期的维护性不是很好
```
.fl { float: left; }
.lh-24 { line-height: 24px; }
.font-12 { font-size: 12px; }
```

## 设置hash的唯一标示
```
<p data-v-hjk12y9n class="name">asdahsjgdkhasd</p>
.name[data-v-hjk12y9n] {
  color: red;
  font-size: 14px;
}
```
缺点：给class多加了一个权重，影响样式的优先级

## css module
通过在改变class的名字来保证唯一性，如 .asd -> .asd_h68ss9