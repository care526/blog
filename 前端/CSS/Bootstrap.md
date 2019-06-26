<!DOCTYPE html>   H5文档类型

<html lang="zh-CN">     语言

移动设备优先
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">  禁用缩放功能

全局样式，css初始化在scaffolding.less文件中
Normalize.css增强跨浏览器表现的一致性    也就是浏览器的css兼容性处理

布局容器
.container  .container-fluid

栅格系统
栅格参数 .col-xs-  .col-sm-  .col-md-  .col-lg-   (超小屏幕 小屏幕 中等屏幕 大屏幕)
所有的列必须放在.rom中
.col-md-offset-*  列偏移
列嵌套
.col-md-push-*   .col-md-pull-*   列排序

排版
<h1>到<h6>均可使用    
还有.h1到.h6类，用于改变内联元素的文字大小，赋予标题样式
<small>  .small  可以用来标记副标题
.lead类  可以让段落突出显示
<mark>  单纯的加有背景颜色
<del>被删除的文本
<s>无用的文本
<ins>插入文本
<u>带有下划线的文本
<strong>加粗文本
<em>斜体文本
---------------------------------------------------
text-left 左对齐
text-center 居中对齐
text-right 右对齐
text-justify 两端对齐
text-nowrap 不换行
text-lowercase 全部小写
text-uppercase 全部大写
text-capitalize 首字母大写
--------------------------------------------------
<abbr title="attribute">attr</abbr> 缩略语
<address>  地址
<blockquote>  引用文本 加上blockquote-reverse类  可右对齐
--------------------------------------------------
表格
<table class="table">  
通过 .table-striped 类可以给 <tbody> 之内的每一行增加斑马条纹样式  <table class="table table-striped">
<table class="table table-bordered">  添加 .table-bordered 类为表格和其中的每个单元格增加边框
<table class="table table-hover">  通过添加 .table-hover 类可以让 <tbody> 中的每一行对鼠标悬停状态作出响应
<table class="table table-condensed"> 通过添加 .table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半

状态类：通过这些状态类可以为行或单元格设置颜色
.active         鼠标悬停在行或单元格上时所设置的颜色
.success 标识成功或积极的动作
.info         标识普通的提示信息或动作
.warning 标识警告或需要用户注意
.danger         标识危险或潜在的带来负面影响的动作

将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，
其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。
在表格的外面加上一个带有.table-responsive类的盒子
--------------------------------------------------
<code>&lt;section&gt;</code>  内联代码  &lt； &gt；是左右括号
<kbd>  用户输入
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre> 代码块
<var> 标记变量
<samp> 标签来标记程序输出的内容

表单
label标签可用.sr-only来隐藏
每个控件用.form-group类来装载
所有设置了.form-control类的控件 width为100%
为 <form> 元素添加 .form-inline 类可使其内容左对齐并且表现为 inline-block 级别的控件
输入input的前后加上div和input-group-addon类可添加前后修饰
通过为表单添加 .form-horizontal 类，并联合使用 Bootstrap 预置的栅格类，可以将 label 标签和控件组水平并排布局

按钮
a button input 都可设置按钮类
btu btu-default  默认样式
btu btu-primary  首选项
btu btu-success  成功
btu btu-info     一般信息
btu btu-warning  警告
btu btu-danger   危险
btu btu-link     链接
btu btu-lg       大按钮
btu btu-xs       超小按钮
btu btu-sm       小按钮
btu-block        拉伸至100%宽度，变成块级元素
disabled=“disabled”  和设置.disabled类      禁用状态

图片
.img-responsive 响应式图片
.center-block   图片水平居中
.img-rounded    有点圆角
.img-circle     圆形
img-thumbnail   带点边框

情景文本颜色
<p class="text-muted">...</p>
<p class="text-primary">...</p>
<p class="text-success">...</p>
<p class="text-info">...</p>
<p class="text-warning">...</p>
<p class="text-danger">...</p>
情景背景色
<p class="bg-primary">...</p>
<p class="bg-success">...</p>
<p class="bg-info">...</p>
<p class="bg-warning">...</p>
<p class="bg-danger">...</p>

左右浮动
.pull-left
.pull-right

.center-block  让元素居中
.clearfix      清除浮动
.show          让元素显示
.hidden        让元素隐藏  这两个用的是display来设置显隐性
.invisible     隐藏 但还占用文档位置