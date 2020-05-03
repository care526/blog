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