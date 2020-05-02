# 所有标签
```html
<!-- 渲染模式：标准渲染 -->
<!DOCTYPE html>

<!-- 语言 -->
<html lang="en">

    <!-- 该网页的元信息 -->
    <head>
        <!-- 编码格式 -->
        <meta charset="utf-8">
		
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

		<!-- 移动端适配 -->
        <meta name="viewport" content="width=device-width,initial-scale=1.0">　　

		<!-- Table的图标，还可以链接一些CSS文件 -->
        <link rel="icon" href="./favicon.ico">

		<!-- Table的标题 -->
        <title>json_sql</title>　　

		<!-- CSS样式 -->
        <style type="text/css" ></style>  

		<!-- 这里的正常JS会优先于DOM渲染，获取不到DOM，并阻塞渲染 -->
		<script></script>  

    </head>

    <!-- html文档主体 -->
    <body>

		<!-- 内容分区的标签 -->
		<address></address>  <!-- 提供联系信息 -->
		<article></article>  <!-- 建议用于文档的内容部分 -->
		<aside></aside>  <!-- 建议用于页面的侧边，无关文档内容的的侧边栏 -->
		<footer></footer>  <!-- 页面的页脚 -->
		<header></header>  <!-- 页面的头部 -->
		<h1 ~ h6></h1 ~ h6>  <!-- 各级标题 -->
		<main></main>  <!-- 文档的主体部分 -->
		<nav></nav>  <!-- 多链接部分的列表 -->
		<section></section>  <!-- 文档的某一小节 -->
    
		<!-- 文本内容的标签 -->   
		<div></div>  <!-- 通用的内容容器 -->
		<blockquote></blockquote>  <!-- 包含的是引用文本 -->
		<hr />  <!-- 分隔线 -->
		<li></li>  <!-- 列表里的条目 -->
		<ol></ol>  <!-- 有序列表 -->
		<ul></ul>  <!-- 无序列表 -->
		<p></p>  <!-- 表示一个文本段落 -->
    
		<!-- 内联文本的标签 -->  
		<span></span>　　<!-- 内联文本 -->  
		<a href="url链接"></a>　　<!-- 超链接 -->  
		href="#id" 可跳转至当前页面的该id标签处的锚点
		<abbr title="缩写的全称">缩写</abbr>　　<!-- 缩写元素 -->  
		<b></b>　　<!-- 加粗文本表强调 -->  
		<br />　　<!-- 换行 -->  

		<></>　　<!--  -->  
		<></>　　<!--  -->  
		<></>　　<!--  -->  
		<></>　　<!--  -->  
		<></>　　<!--  -->  
		<></>　　<!--  -->  
		<></>　　<!--  -->

		<!-- 表单 -->
		<form name="XXX" method="XXX" action="XXX"></form>
		name: 表单的名字
		mtthod: 提交信息的方法 get/post/...
		action: 信息待提交的url

		<input name="名字" type="类型" value="存放用户的输入值" 
			placeholder="输入框的提示信息" disabled(设置该属性,不可输入) 
			min="规定输入字符的最小值" max="规定输入字符的最大值" width="宽度" height="高度"
		/ >  <!-- input可以是单闭合标签 -->
		type的可选值：
		text：默认，定义文本输入，默认是20个字符
		password：定义密码字段，输入的字符会被自动遮挡
		radio：定义单选框
		checkbox: 定义复选框
		button：定义可点击按钮
		submit：定义提交按钮
		image：定义图像作为提交按钮
		reset：点击后表单全部重置
		file：供文件上传
		hidden：定义隐藏字段
		email：定义用于email地址输入的字段
		color：定义拾色器
		date：定义日期字段(带有calendar控件)
		datetime：定义日期字段(带有calendar控件和time控件)
		month：定义日期字段的月(带有calendar控件)
		week：定义日期字段的周(带有calendar控件)
		time：定义日期字段的时、分、秒(带有time控件)
		number：定义只能输入数字(右边会出现增加减少的控件，可删除)
		search：定义用于搜索的文本字段
		tel：定义用于输入电话号码的文本字段
		url：定义用于URL的文本字段

		<label for="male"></label>
		for: 用于关联表单元素，对应的是表单元素的id

		<></>
		<></> 
		<!-- 嵌入其他页面的标签 -->
		<iframe width="宽度" height="高度" src="链接" scrolling="XXX" width="宽度"></iframe>
		scrolling: 可否可滚动yes/on

		<></>
		<></>
  	</body>

	<!-- JS脚本 -->
	<script type="text/javascript" src="XXX" defer charset="XXX" async></script>  
	type: 指定脚本的类型
	src: 脚本的链接,当有了这个属性的时候,标签里面的代码不会执行
	defer: 当页面加载后再执行
	charset: 使用的字符编码
	async: 异步执行脚本

</html>
```

## 块级元素

## 内联元素