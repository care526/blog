# 其他

## 鼠标样式
cursor: xxx;
- default: 默认光标
- auto: 浏览器设置的光标
- crosshair: 光标呈现为十字线
- pointer:	光标呈现为指示链接的指针（一只手）
- move:	此光标指示某对象可被移动
- text:	此光标指示文本
- wait:	此光标指示程序正忙（通常是一只表或沙漏）
- help:	此光标指示可用的帮助（通常是一个问号或一个气球）
- e-resize:	此光标指示矩形框的边缘可被向右（东）移动
- ne-resize:	此光标指示矩形框的边缘可被向上及向右移动（北/东）
- nw-resize:	此光标指示矩形框的边缘可被向上及向左移动（北/西）
- n-resize:	此光标指示矩形框的边缘可被向上（北）移动
- se-resize:	此光标指示矩形框的边缘可被向下及向右移动（南/东）
- sw-resize:	此光标指示矩形框的边缘可被向下及向左移动（南/西）
- s-resize:	此光标指示矩形框的边缘可被向下移动（南）
- w-resize:	此光标指示矩形框的边缘可被向左移动（西）

## 滤镜
filter: xxx;
- blur(0px): 设置高斯模糊，默认值为0px，数值越大，越模糊
- brightness(1): 设置高亮，默认是1，数值越大越亮，0为全黑 ( 有效值 >= 0 )
- contrast(1): 设置对比度，默认是1，数值越大对比度越高。0为全黑，负数无变化 ( 有效值 >= 0 )
- grayscale(1): 设置灰度，数值越大对比度越高。0为全黑，负数无变化 ( 有效值 >= 0 && <=1 ) 超过1按1处理
- saturate(1): 设置饱和度，默认是1，数值越大饱和度越高。负数无变化 ( 有效值 >= 0 )
- hue-rotate(0deg): 设置色相转换，默认0deg，超过360deg相当于绕了一圈
- invert(0): 反转图像输入，有效值0～1
- opacity(1): 设置透明度，有效值0～1
- sepia(0): 将图像转换为深褐色，默认是0，1为完全深褐色，超过1按1处理
- url(a.svg#element-id): 使用svg的滤镜，同时可加载svg里面锚点上的滤镜
ps：有效值之外，样式无变化。以上数值类型均可以百分数代替

## 函数
- calc()  # 计算属性
  `width: calc(100% - 75px)`
- linear-gradient()  # 创建一个线性渐变的图像
  `linear-gradient(45deg, #33ACA1 0%, #59E2E6 100%)`
- radial-gradient()  # 用径向渐变创建图像
  ``
- repeating-linear-gradient()  # 用重复的线性渐变创建图像
  ``
- repeating-radial-gradient()  # 用重复的径向渐变创建图像
  `` 

## 滚动条
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
::-webkit-scrollbar  
{  
    width: 16px;  /*滚动条宽度*/
    height: 16px;  /*滚动条高度*/
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  /*滚动条的背景区域的圆角*/
    background-color: red; /*滚动条的背景颜色*/  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  /*滚动条的圆角*/
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: **green**;  /*滚动条的背景颜色*/
}

## 单位
### 相对尺寸
- em  # 相对于当前元素的字体尺寸。如果字体尺寸是16px，则2em=32px
- rem  # 相对于根元素的字体尺寸
- vw  # viewpoint width视窗宽度 1vw=视窗宽度的1%
- vh  # viewpoint height视窗高度 1vh=视窗高度的1%
- vmin  # vw和vh中较小的那个
- vmax  # vw和vh中较大的那个
- ex  # 英文小写字母x的高度
- ch  # 数字0的宽度
- %  # 相对有高度的上级元素的百分比
  
### 绝对尺寸(真实的物理尺寸)
- in  # 英寸（1in = 96px = 2.54cm）
- cm  # 厘米
- mn  # 毫米
- px  # 像素 (1px = 1/96th of 1in)
- pt  # point (1pt = 1/72in)
- pc  # pica (1pc = 12 pt)