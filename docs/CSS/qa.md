# 问题

## css样式应用优先级
1. !important
2. 行内样式（不能写!important） -> a
3. ID选择器的数量  -> b
4. class类选择器,属性选择器,伪类选择器的数量  -> c
5. 类型选择器,伪元素的数量  -> d
6. 通配符 *
7. 样式继承
8. 浏览器默认
特指度（a, b, c, d）
#nav-global > ul > li > a.nav-link  特指度：（0, 1, 1, 3）
ps：如果优先级相同，那么按照编写的顺序（后面的）来应用
    如果有多个!important，按照最后一个!important应用

## CSS Reset
解决不同浏览器之间的默认样式的差异，使其在不同的浏览器中得到相同的视觉效果
不同的项目的reset根据需要设置  
http://necolas.github.io/normalize.css

## css hacks
不同浏览器对于css样式的解析结果不同，导致输出的页面效果不同，使用css hacks来解决浏览器的兼容性问题，这个针对不同浏览器写不同css的过程叫做css hacks
CSS Hack常见的有三种形式：CSS属性Hack、CSS选择符Hack以及IE条件注释Hack， Hack主要针对IE浏览器。

## css 继承
不可继承的：
display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi
所有元素可继承：visibility和cursor
内联元素可继承：（大部分都是文本）
letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction
快级元素可继承：text-indent和text-align。
列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
表格元素可继承：border-collapse。

## 预处理器
- sass
- less

## link和@import的异同：
link用于html引入css，是标签  
@import可用于html引入css，也可用于css中引入css，是样式，不是标签。  
用法：@import url（css地址）；  
本质上两者使用选择区别不大，但为了软件中编辑布局网页html代码，一般使用link较多，也推荐使用link。  
不推荐使用@import的原因：  
不能并行下载css，使页面反应时间过长。但可用于工程较大的项目中，编译得到不含@import的css文件。如webpack。  

## display：none；和visible：hidden；的区别：
display相当于把元素删除，dom结构中没有，查询不到，不在render tree中，所以不参与界面的绘制
visible会保留元素在页面上的位置，dom结构中也有，只是隐藏

## 盒子模型，ie盒子模型差别：
正常的盒子，width、height是设置的是content的大小
怪异ie盒子，width、height是设置总的宽度和高度，压缩content的大小

## 三种定位机制：
标准文档流
1. 行内元素之间的水平margin为第一个元素的margin-right加上第二个元素的margin-left
2. 块级元素之间的竖直margin不是第一个元素的margin-bottom加上第二个元素的margin-top，而是两者中的较大值
3. 嵌套盒子之间的margin（margin坍塌）
原因：可能是由于margin值需要参照物来实现偏移，当没有参照物就出现无法偏移的情况。所以需要手动给父元素设置一个参照物
解决方法（推荐1、2、3）
1. 给父元素设置一个border，如果不需要就设置透明的border
2. 给父元素添加overflow：hidden；
3. 给要用的子元素前面添加一个兄弟元素（content：“”；overflow：hidden；）
4. 给父元素添加display：table；
5. 给父元素设置display：fixed；
********

两个都有display：inline-block；属性的盒子之间会有4px的空隙
解决方法：在两个子元素的父元素上设置word-spacing: -4px;属性
然后在子元素上再设置word-spacing: 4px;作相抵消，否则，子元素的文字会挤在一起（每个word之间减少4px的空间）
******

浮动及清除:
float:left/right;
相当于给元素默认添加了属性display：inline-block；脱离文档流，在常规文档流的上面
***
绝对定位  re  ab   fixe



## BFC
就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，外面的也不会影响到里面的元素

## 浏览器引擎前缀组织属性
+ -webkit- 使用 Blink 或 WebKit 渲染引擎的浏览器 Chrome 和 Safari
+ -moz- 使用 Gecko 渲染引擎的浏览器 Firefox
+ -ms- 使用 Trident 渲染引擎的浏览器 Internet Explorer/Edge
```
-ms-transform-origin: @origin;
-moz-transform-origin: @origin;
-webkit-transform-origin: @origin;
transform-origin: @origin;
```

## 字体图标
图片格式：
- 位图图片：bmp jpg gif png
  优点：清晰，细腻
  缺点：放大后会产生锯齿状 占据的空间比较大
- 矢量图图片：svg(是使用xml格式)
  优点：无限的放大缩小 体积较小
  缺点：色彩较少
  官网：阿里（www.iconfont.cn）
       iocmoon（icooon.io/app/#/selete）

图标的格式
- 采取图片的格式
  处理方式：雪碧图 CSS Sprite
- 采取字体格式，可以采用color，font-size来改变

原理
+ 读取文字内容转换成对应的 unicode码（&#xe608）
+ 根据HTML里设置的 font-family （如果没设置则使用浏览器默认设置）去查找电脑里（如果有自定义字体@font-face ，则加载对应字体文件）对应字体的字体文件
+ 找到文件后根据 unicode 码去查找绘制外形，找到后绘制到页面上
```
@font-face {
    font-family: "MyFont";
    src: url('./iconfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
.icon-add:before { 
    font-family:"MyFont" !important;
    font-size:16px;
    font-style:normal;
    content: "\e608";  
    /* 
        相当于 <span>&#xe608</span>   => 解析成 <span class="icon-add"></span>
        注意1：\e608与&#xe608写法的不同；
        注意2：content属性只在伪类上起作用；
        注意3：标签直接写Unicode码解析后不易理解，难复用。
     */
}
```

## CSS3新特性
- 选择器
- 边框(border-image、border-radius、box-shadow)
- 背景(background-clip、background-origin、background-size)
- 渐变(linear-gradients、radial-gradents)
- 字体(@font-face)
- 转换、形变(transform)
- 过渡(transition)
- 动画(animation)
- 弹性盒模型(flex-box)
- 媒体查询(@media)

## CSS优化：
1. 样式放在头部，脚本放在底部
<加载优化，减少请求>
2. 减少使用import，不使用import
3. 压缩文件的体积
4. css缩写   如：margin padding.....
5 .多用class，减少层级选择器的使用（因为，层级越多，定位越慢）
6 .利用好继承机制（css可以和不可以继承的属性）
7. 减少重布局和重绘，改变元素的大小和位置会触发

css sprite（雪碧图）
background+position

水平居中的方式，垂直居中的方式
1. 块级元素：
margin左右auto（盒子有宽度）
2. 内联元素或inline-block
text-align：center；  
一些box设置display：inline-block；时每个box之间会有4px的word-spacing  
所以在box使用的时候加-4px的word-spacing  
3. 相对定位和绝对定位来实现水平和垂直居中