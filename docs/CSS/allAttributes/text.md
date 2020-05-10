# 文本

```css
font

font-style: italic  斜体的字体
            oblique  倾斜的字体

font-weight: 100 ~ 900
             bold
             bolder

font-size: 20px  固定大小
           200%  相对父元素的大小

font-family:  "Times New Roman",Georgia,Serif  字体族

text-transform: capitalize  单词第一个字母大写
                uppercase  全部大写字母
                lowercase　全部小写字母

word-break: break-all  允许在单词内换行
            keep-all  只能在半角空格或连字符处换行

word-wrap: break-word  长单词自动换行

text-align: left  文本左对齐
            right  文本右对齐
            center  居中对齐
            justify  文本两端对齐 (ios移动端有兼容性问题)

word-spacing: 4px　单词间的空间大小

text-indent: 50px 　段落首行的缩进

text-decoration: underline  下划线
                 line-through  中划线
                 overline  上划线

text-shadow: h-shadow v-shadow blur color   水平阴影的位置 / 垂直阴影的位置 / 模糊的距离 / 颜色

direction: ltr  文本方向从左到右，默认
           rtl  文本方向从左到右

writing-mode: vertical-rl  垂直方向自右而左的书写方式
              vertical-lr  垂直方向自左而右的书写方式

以下几个只有火狐实现了，不要用
text-decoration-line
text-decoration-color
text-decoration-style
text-decoration-skip
text-underline-position

```