# CSS响应式

## @media
```scss
@media (min-width: 1200px) {
    // 1200px 以上的用这里的样式
}
@media (max-width: 1200px) {
    // 1200px 以内的用这里的样式
}
@media (min-width: 992px) and (max-width: 1200px) {
    // 992px 到 1200px 之间的用这里的样式
}
// 以下为兼容写法

@media and screen (min-width: 1200px) { }
```
ps: px 单位不能少 (重要)

## 如何设置
.col-xs-  .col-sm-  .col-md-  .col-lg
        765       992      1200  
以992px为分割线，去区分PC和moblie   
因为992px是一个左右布局和上下布局都比较适合的分割线  
576px - 992px 在这个区间，以留白的形式去处理空间  
< 576px，容器内部应始终100%，周围以等距处理  