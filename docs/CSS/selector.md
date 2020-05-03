# 选择器

## 选择器
匹配顺序：从右向左匹配，选择器的层级越多，匹配的越慢
- 通配选择器
  *
- 类选择器
  .class
- ID选择器
  #id
- 标签选择器
  p div ul li
- 同级，并联
  div, p
- 后代选择器(包括子孙代)
  div p
- 子代选择器
  div > p
- **后面紧邻**的第一个兄弟元素
  div + p
- 后面的所有兄弟元素
  div ~ p
- 属性选择器
  div[name]  # 带有name属性的div
  div[name="care"]  # name为care的所有div
  div[name～="care"]  # name包含care的所有div
  div[name1][name2]  # 同时具有name1和name2属性的div
  div[name^="care"]  # name为care开头的所有div
  div[name|="care"]  # name为care开头的所有div
  div[name$="care"]  # name为care结尾的所有div
  div[name*="care"]  # name包含care的所有div

## 伪类选择器
- 动态伪类选择器
	- :link 未访问
	- :hover 鼠标放上去时
	- :active 鼠标按下时
	- :focus 获得焦点时
	- :visited 访问过
- 目标伪类选择器 (ie8及之前不被支持)
	- :target


## 伪类 & 伪元素
### 动态伪类选择器：
### 目标伪类选择器：（ie8及之前不被支持）
### 语言伪类选择器：（ie7及一下不被支持）
<html lang="en-US">

### UI元素状态伪类选择器
:checked   匹配选中的复选按钮或单选按钮表单元素
:enabled   匹配所有启用的表单元素
:disabled  匹配所有禁用的表单元素
### 结构伪类选择器
:rooot  相当于html元素，一般用于设置css变量
:empty  匹配空标签元素，里面有空格也不行
:first-child  父元素的第一个子元素
:last-child   父元素的最后一个子元素
:nth-child（n）  父元素的第n个子元素
:nth-last-child（n）  父元素的倒数第n个子元素
div:nth-of-type（n）  父元素的第n个div元素
div:nth-last-of-type（n）  父元素的倒数第n个div元素
div:first-of-type（n）  父元素的第1个div元素
div:last-of-type（n）  父元素的倒数第1个div元素
E:only-child   父元素只包含一个子元素，且该子元素匹配E元素
E:only-of-type  父元素只包含一种类型的子元素，且该子元素匹配E元素
E:nth-child(odd)  匹配奇数，等同于(2n + 1)
E:nth-child(even)  匹配偶数，等同于(2n)
### 否定伪类选择器
E：not（F）  匹配所有除F元素以外的E元素
### 伪元素
::first-letter  选择文本块的第一个字母
::first-line  匹配第一行文本
::before  
::after
::selection  匹配选中的文本