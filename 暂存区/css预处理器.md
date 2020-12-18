# CSS预处理器

## 出现的背景
CSS只是一行行单纯的属性描述，写起来相当的费事，而且大量代码难易组织和维护    

## 解决的问题
用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件  
- 变量
- 嵌套
- 继承
- 混合
- 函数
- 导入
- 注释
- 判断，流程控制 

## 现有的常用预处理器
1. sass    .sass .scss
2. less    .less
3. stylus  .styl

ps：postcss css后处理器  
    输入css 输出css

## 详解
### 变量
1. 变量以美元符号开头，赋值方法与 CSS 属性的写法一样  
2. 变量支持块级作用域  
   局部变量：嵌套规则内定义的变量
   全局变量：不在嵌套规则内定义的变量 或 添加 !global 声明
```css
/* 定义 */
$width: 5em;
$width: 5em !global;  // 全局变量
/* 使用 */
#main {
  width: $width;
}
```
#### 数据类型
1. 数字
   1  10px
2. 字符串 
   有引号字符串与无引号字符串
   "foo"  'bar'  baz
3. 颜色
   blue  #04a3f9  rgba(255,0,0,0.5)
4. 布尔型
   true  false
5. 空值
   null
6. 数组(list)  
   用空格或逗号作分隔符  
   ```sass
   1.5em 1em 0 2em                // 空格分隔
   Helvetica, Arial, sans-serif   // 逗号分隔
   (1px 2px) (5px 6px)            // 是包含 1px 2px 与 5px 6px 两个数组的数组（空格分隔）
   1px 2px, 5px 6px               // 同上（逗号分隔）
   ```
7. maps
   相当于JS中的Object  
   (key1: value1, key2: value2)

****
### 嵌套
```css
.a {
  .b {}
}
```
```css
.a {
  &:hover {}
}
```
```css
.a {
  &-b {}
}
```
```css
.a {
  font: 20px/24px {
    family: fantasy;
    weight: bold;
  }
}
```

****
### 继承
```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

### 混合
```scss
// 定义
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
// 引用
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```
```css
.page-title {
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
  padding: 4px;
  margin-top: 10px; }
```
mixin和extend 使用场景的区别    
mixin更加的灵活可以传参数，动态变化  
```scss
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p { @include sexy-border(blue, 1in); }
```

### 函数
- 自带的函数
  hsl(210deg 100% 20%);  
- 自定义的函数
    ```
    @function function-name($args) { 
        @return value-to-be-returned;
    }
    ```

### 导入
导入sass文件
css有一个特别不常用的特性，即@import规则，它允许在一个css文件中导入其他css文件。然而，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢
sass也有一个@import规则，但不同的是，sass的@import规则在生成css文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。
使用sass的@import规则并不需要指明被导入文件的全名。你可以省略.sass或.scss文件后缀

局部文件
即不会生成对应的css文件的文件，一般用下划线开头。但是在import引入的时候可省略下划线和后缀
_care.sass  
@import"./care"

反复声明的变量，最后一次的声明会覆盖掉前面的声明

如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值
$fancybox-width: 400px !default;

import也可在{}规则内使用，但是导入的内容只在{}内部生效，同时会连上外面的父属性

原生的CSS导入
1.被导入文件的名字以.css结尾；
2、被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css），由此可用谷歌字体API提供的相应服务；
3、被导入文件的名字是CSS的url()值。
以上三种方式，sass会认为是原生CSS的import引用

### 注释
```
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */

// This comment is
```
ps: 多行注释会被编译进样式代码中

### 判断，流程控制 
if else 
```scss
p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
  @if null  { border: 3px double; }
}
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
```
for  
```scss
@for $num from 0 through 100 {
	.w_#{$num} {
        width: #{$num}px;
    }
}
```
each  
```scss
@each $num in 70, 80, 90, 100, 110, 120 {
    .fs_#{$num} {
        font-size: #{$num}px;
    }
}
```


<!-- ## github css代码组织 及 皮肤变化方案    -->