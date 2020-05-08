# 所有样式

边框　https://www.cnblogs.com/chris-oil/p/5625437.html(nodejs中间件)




## border
border：border-width  border-style  border-color；　　＃这三个属性也可以分开设置  
border-width：10px;  
border-style：none/dotted /dashed/solid/double;　　＃无／点／虚线／实线／双线边框  
border-color：red;  
＃将边框的上下左右的各个属性分开设置
border-top	
border-top-width	
border-top-style	
border-top-color
border-right	
border-right-width	
border-right-style	
border-right-color
border-bottom	
border-bottom-width	
border-bottom-style	
border-bottom-color
border-left	
border-left-width	
border-left-style	
border-left-color
border-radius：8px / 10%;　　＃设置元素的圆角大小  
＃也可以分开单独设置
border-top-left-radius	
border-top-right-radius	
border-bottom-right-radius 　
border-bottom-left-radius　　
box-shadow：h-shadow v-shadow blur spread color inset;　＃水平阴影位置　垂直阴影位置　模糊距离　阴影的尺寸　阴影颜色　内部阴影
border-image	
border-image-source　
border-image-slice	
border-image-width	
border-image-outset	
border-image-repeat　＃暂时不管

## 背景
background　＃以下的所有都可写在这里
background-image：url('图像路径');
background-repeat：no-repeat／repeat-y／repeat-x;　＃图像不重复／y轴重复／x轴重复
background-position：left center／5px 6px／10% 20%;　＃背景图的起始位置
background-size：100px 100px;　＃背景图片的大小
background-color：red;　＃背景的颜色
background-attachment　background-origin	background-clip	 





## 布局定位
position: absolute / fixed / relative;  # 绝对定位(相对父元素) / 固定定位(相对body) / 相对定位(相对自己)
z-index: 6 / 0 / -1;   # 定义元素的层级

clip:rect(top, right, bottom, left);  ＃绝对定位的元素，子元素大小比父元素大小大，裁剪
display:none/block/inline/inline-block/list-item/几种table；　＃隐藏/块级/内联/行内块/列表/表格
overflow:hidden /scroll ;　　＃隐藏／滚动条
overflow-x　overflow-y　　＃同上
float:left/right;　　＃浮动
clear:left/right/both;　　＃左侧／右侧／两侧不许有浮动元素
visibility:hidden;　　＃隐藏元素
top  right  bottom  left　　＃距离上／右／下／左的距离　单位：具体值／相对父元素的百分比
width　　min-width　　max-width　　＃宽度/最小宽度/最大宽度　单位：具体值／相对父元素的百分比
height　　min-height　　max-height　　＃高度/最小高度/最大高度　单位：具体值／相对父元素的百分比
margin:top right bottom left; margin-top margin-right margin-bottom margin-left    #单位：具体值／相对父元素的百分比
padding:top right bottom left; padding-top padding-right padding-bottom padding-left    #单位：具体值／相对父元素的百分比

columns	column-width	column-count	column-gap
column-rule	column-rule-width	column-rule-style	column-rule-color
column-span	column-fill	column-break-before	column-break-after
column-break-inside	


















### 待整理
box-sizing  # 盒模型
- content-box  # 标准盒模型(默认)
- border-box  # IE怪异盒模型