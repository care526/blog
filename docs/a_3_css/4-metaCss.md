# 原子类

```css
/* 自己写的一些原子性的css */
// 缺点：大量的css在html中
//     ·不够语义化

// 真正需要写的就是 
// 大小相关的内容
// width  height
// top bottom right left
// 其他的样式
// background

/* 定位相关 */
.pn {
  &-r {
    position: relative;
  }
  &-a {
    position: absolute;
  }
  &-f {
    position: fixed;
  }
}
// 元素类型
.dp {
  &-i {
    display: inline;
  }
  &-b {
    display: block;
  }
  &-ib {
    display: inline-block;
  }
  &-f {
    display: flex;
  }
}
// 浮动
.fl {
  float: left;
}
.fr {
  float: right;
}
/* 盒子 */

/* 外观 */
// border 边框
.bd {
  // 三部分组成，粗细+样式+颜色
  &-1s6 {
    border: 1px solid #666;
  }
  // circular 50%圆角
  &-cl {
    border-radius: 50%;
  }
}

// 文字
.fs {
  // 大小
  &12 {
    font-size: 12px;
  }
  &14 {
    font-size: 14px;
  }
  &16 {
    font-size: 16px;
  }
  &18 {
    font-size: 18px;
  }
  &20 {
    font-size: 20px;
  }
  &22 {
    font-size: 22px;
  }
  &24 {
    font-size: 24px;
  }
}
fw {
  font-weight: bold;
}
fwer {
  font-weight: bolder;
}
// 行高
.lh {
  &-12 {
    line-height: 12px;
  }
  &-14 {
    line-height: 14px;
  }
  &-16 {
    line-height: 16px;
  }
  &-18 {
    line-height: 18px;
  }
  &-20 {
    line-height: 20px;
  }
  &-22 {
    line-height: 22px;
  }
  &-24 {
    line-height: 24px;
  }
}
// 系统常用的颜色
// 6位相同的使用xxx，每两位相同的使用xx，6位都不同的使用全拼xxxxxx,rgb的转16进制，透明度使用-6/1(代表 #666666, 0.1)
.cr {
  &-3 {
    color: #333;
  }
  &-6 {
    color: #666;
  }
  &-9 {
    color: #999;
  }
  &-f7 {
    color: #f7f7f7;
  }
}

.pt {}
.pb {}
.pl {}
.pf {}
.mt {}
.mb {}
.ml {}
.mr {}
```


```css
html, body, #root, .App {
  width: 100%;
  height: 100%;
}

#root {
    position: relative;
    z-index: 1;
}

body {
  background-color: #f7f7f7;
}

button {
    background: transparent;
}

// @font-face{
//     font-family: 'weight-font'; 
//     src: url('../fonts/weight_font.ttf');
// }
*[hidden] {
    display: none !important;
}

.hidden-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome Safari */
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.anchorBL {
    display: none;
}

input, button {
  outline: none;
}

/* 文本超长 */
.text-popper {
  display: inline-block !important;
  width: 100%;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

*[data-white-space-nowrap] {
    white-space: nowrap;
}

// .text-ellipsis-two {
//     /* autoprefixer: ignore next */
//     display: -webkit-box;
//     /* autoprefixer: ignore next */
//     -webkit-box-orient: vertical;
//     /* autoprefixer: ignore next */
//     -webkit-line-clamp: 2;
//     overflow: hidden;
//     /* autoprefixer: off */
//     /* autoprefixer: ignore next */
//     -webkit-box-orient: vertical;
//     /* autoprefixer: on */
// }

.text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.absolute-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.avatar-border-style-0 {
  border: 1px solid #999;
}

.avatar-border-style-1 {
  border: 1px solid #3c90ff;
}

.avatar-border-style-2 {
  border: 1px solid #ee5b5b;
}

input[type=date]::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

// 全局常用的flex布局

.flex-none {
    flex: none;
}

.row {
    display: flex;
}

*[data-row] {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

*[data-flex-wrap] {
    flex-wrap: wrap;
}

.align-items-center {
    align-items: center;
}

*[data-align-items-center] {
    align-items: center;
}

.justify-content-center {
    justify-content: center;
}

*[data-justify-content-center] {
    justify-content: center;
}

.justify-content-between {
    justify-content: space-between;
}

.justify-content-flex-end {
    justify-content: flex-end;
}

*[data-justify-content-flex-end]  {
    justify-content: flex-end;
}

.align-items-flex-end {
    align-items: flex-end;
}

*[data-align-items-flex-end] {
    align-items: flex-end;
}

.space-around {
    justify-content: space-around;
}

*[data-space-around] {
    justify-content: space-around;
}

.space-between {
    justify-content: space-between;
}

*[data-space-between] {
    justify-content: space-between;
}

.space-end {
    justify-content: flex-end;
}

.column {
    display: flex;
    flex-direction: column;
}

*[data-column] {
    display: flex;
    flex-direction: column;
}

*[data-expaned] {
    flex: 1;
}

.expaned {
    flex: 1;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

*[data-center] {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

*[data-center] {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.overflow-hidden {
    overflow: hidden;
}

*[data-overflow-hidden] {
    overflow: hidden;
}

.overflow-auto {
    overflow: auto;
}

*[data-overflow-auto] {
    overflow: auto;
}

.text-align-left {
  text-align: left;
}

*[data-text-align-left] {
    text-align: left;
}

.text-align-right {
  text-align: right;
}

*[data-text-align-right] {
    text-align: right;
}

.text-align-center {
  text-align: center;
}

*[data-text-align-center] {
    text-align: center;
}

.background-color-primary {
    background: #14cc9b;
}

.background-color-999 {
    background: #999;
}

*[data-background-color-fff] {
    background: #fff;
}

.color-primary-light {
    color: #14cc9b;
}

*[data-color-primary-light] {
    color: #14cc9b !important;
}

.color-primary-dark {
    color: #11CBA7;
}
.color-link {
    color: #3C90FF;
}

*[data-color-primary-dark] {
    color: #11CBA7;
}

.color-danger-light {
    color: #ff6565;
}

*[data-color-danger-light] {
    color: #ff6565;
}

.color-ff2a2a {
    color: rgb(192, 181, 181);
}

.color-danger-dark {
    color: #ffa5a5;
}

*[data-color-danger-dark] {
    color: #ffa5a5;
}

.color-333 {
  color: #333 !important;
}

*[data-color-333] {
    color: #333 !important;
}

.color-666 {
  color: #666;
}

*[data-color-666] {
    color: #666;
}

.color-999 {
  color: #999;
}

*[data-color-999] {
    color: #999;
}

.color-ccc {
  color: #ccc;
}

*[data-color-ccc] {
    color: #ccc;
}

.color-ddd {
  color: #ddd;
}

*[data-color-ddd] {
    color: #ddd;
}

.color-000 {
  color: #000;
}

*[data-color-000] {
    color: #000;
}

.color-fff {
    color: #fff;
}

*[data-color-fff] {
    color: #fff;
}

@for $i from 10 to 41 {
    .font-size-#{$i} {
        font-size: #{$i}px;
    }

    *[data-font-size-#{$i}] {
        font-size: #{$i}px;
    }
}

.font-weight-600 {
    font-weight: 600;
}

*[data-font-weight-600] {
    font-weight: 600;
}

@for $i from 1 to 110 {
    .margin-left-#{$i} {
        margin-left: #{$i}px;
    }

    .margin-v-#{$i} {
        margin-top: #{$i}px;
        margin-bottom: #{$i}px;
    }

    .margin-h-#{$i} {
        margin-left: #{$i}px;
        margin-right: #{$i}px;
    }

    .padding-v-#{$i} {
        padding-top: #{$i}px;
        padding-bottom: #{$i}px;
    }

    .padding-h-#{$i} {
        padding-left: #{$i}px;
        padding-right: #{$i}px;
    }

    *[data-margin-v-#{$i}] {
        margin-top: #{$i}px;
        margin-bottom: #{$i}px;
    }

    *[data-margin-h-#{$i}] {
        margin-left: #{$i}px;
        margin-right: #{$i}px;
    }

    *[data-padding-v-#{$i}] {
        padding-top: #{$i}px;
        padding-bottom: #{$i}px;
    }

    *[data-padding-h-#{$i}] {
        padding-left: #{$i}px;
        padding-right: #{$i}px;
    }

    *[data-margin-left-#{$i}] {
        margin-left: #{$i}px;
    }

    .margin-top-#{$i} {
        margin-top: #{$i}px;
    }

    *[data-margin-top-#{$i}] {
        margin-top: #{$i}px;
    }

    .margin-right-#{$i} {
        margin-right: #{$i}px;
    }

    *[data-margin-right-#{$i}] {
        margin-right: #{$i}px;
    }

    .margin-bottom-#{$i} {
        margin-bottom: #{$i}px;
    }

    *[data-margin-bottom-#{$i}] {
        margin-bottom: #{$i}px;
    }

    .padding-left-#{$i} {
        padding-left: #{$i}px;
    }

    *[data-padding-left-#{$i}] {
        padding-left: #{$i}px;
    }

    .padding-top-#{$i} {
        padding-top: #{$i}px;
    }

    *[data-padding-top-#{$i}] {
        padding-top: #{$i}px;
    }

    .padding-right-#{$i} {
        padding-right: #{$i}px;
    }

    *[data-padding-right-#{$i}] {
        padding-right: #{$i}px;
    }

    .padding-bottom-#{$i} {
        padding-bottom: #{$i}px;
    }

    *[data-padding-bottom-#{$i}] {
        padding-bottom: #{$i}px;
    }

    .margin-#{$i} {
        margin: #{$i}px;
    }

    *[data-margin-#{$i}] {
        margin: #{$i}px;
    }

    .padding-#{$i} {
        padding: #{$i}px;
    }

    *[data-padding-#{$i}] {
        padding: #{$i}px;
    }

    .line-height-#{$i} {
        line-height: #{$i}px;
    }

    *[data-line-height-#{$i}] {
        line-height: #{$i}px;
    }
}

@for $i from 1 to 200 {
    .width-#{$i} {
        width: #{$i}px;
    }

    *[data-width-#{$i}] {
        width: #{$i}px;
    }

    .height-#{$i} {
        height: #{$i}px;
    }

    *[data-height-#{$i}] {
        height: #{$i}px;
    }
}

.border-radius-10 {
    border-radius: 10px;
}

*[data-border-radius-10] {
    border-radius: 10px;
}

.border-radius-20 {
    border-radius: 20px;
}

*[data-border-radius-20] {
    border-radius: 20px;
}

.border-radius-5 {
    border-radius: 5px;
}

*[data-border-radius-5] {
    border-radius: 5px;
}

.border-radius-50p {
    border-radius: 50%;
}

*[data-border-radius-50p] {
    border-radius: 50%;
}

.height-100p {
    height: 100%;
}

*[data-height-100p] {
    height: 100%;
}

.width-100p {
    width: 100%;
}

*[data-width-100p] {
    width: 100%;
}


.height-auto {
    height: auto;
}

*[data-height-auto] {
    height: auto;
}

.pointer {
    cursor: pointer;
}

// 定位
.position-re {
    position: relative;
}

.position-ab {
    position: absolute;
}

.bg1 {
    background-color: pink;
}

.bg2 {
    background: red;
}

.bg3 {
    background-color: blue;
}
```