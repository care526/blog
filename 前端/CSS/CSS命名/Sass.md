CSS扩展语言
------------------------------------------------------------------------------------------------------------------------------
变量
声明变量
$highlight-color: #F90;   一个属性
$basic-border: 1px solid black;    多个属性，中间空格
$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;      多个属性，中间“、”
引用变量
变量可以定义在{}内，亦可以在{}外，定义在{}内的变量只能在{}内使用
$width: 100px;
width: $width;
变量的声明也可以使用其他变量
$highlight-border: 1px solid $highlight-color;
变量的声明建议使用中划线  如：$highlight-color
中划线和下划线这两种用法相互兼容，使用中划线声明的变量也可以使用下划线引用，反之亦然
$highlight-color  ==  $highlight_color
------------------------------------------------------------------------------------------------------------------------------
嵌套CSS规则
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
里面既可以写样式（伪类除外，但是提供特殊的方式使用，如下），也可以写子元素块
article a {
  color: blue;
  &:hover { color: red }
}
群组选择器
html元素，类元素，id元素的等，多个之间用“，”逗号隔开
.button, button{...}
nav a, aside a{...}

子组合选择器>,父元素下面的所有指定类型的子元素
同层相邻组合选择器+，某元素后与之紧跟的某元素
同层全体组合选择器~，某元素后的所有指定类型的某元素
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
这三个选择器，可以放在外面也可以放在里面

嵌套属性
nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
nav {
  border: 1px solid #ccc {
  left: 0px;
  right: 0px;
  }
}
------------------------------------------------------------------------------------------------------------------------------
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

import也可在{}规则内使用，但是导入的内容只在{}内部生效，同时会连上外面的夫属性

原生的CSS导入
1.被导入文件的名字以.css结尾；
2、被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css），由此可用谷歌字体API提供的相应服务；
3、被导入文件的名字是CSS的url()值。
以上三种方式，sass会认为是原生CSS的import引用
------------------------------------------------------------------------------------------------------------------------------
静默注释
生成的CSS文件没有相应的sass注释
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
当注释出现在不该出现的位置，生成的CSS文件中也不会有相应的注释
body {
  color /* 这块注释内容不会出现在生成的css中 */: #333;
  padding: 1; /* 这块注释内容也不会出现在生成的css中 */ 0;
}
------------------------------------------------------------------------------------------------------------------------------
混合器