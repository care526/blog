# CSS编写规范及样式调优
css重构：样式表性能调优  

## 编写规范   对于开发，从可阅读性的角度
我是准从一条准则：怎么不写，怎么写的少
### 如何编写  
  1. 哪些属性是可继承的，合理的利用继承属性和样式的覆盖
      - 字体系列
        font -family -weight -size -style ...
      - 文本系列
        text -indent -align -height ...
        word...
        letter...
        color 
        其他用的很少的
      - 其他
  2. 对属性进行适当的分类
      ```scss
      .container {
        // 定位
        position: relative;
        top: 0;
        left: 0;
        // 大小
        width: 50%;
        height: 200px;
        // 内部子元素的排列
        display: flex;
        flex-wrap: wrap;
        // 文本
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #999999;
        // 皮肤
        background: #e6e6e6;
        border: 1px solid #666666;
        border-radius: 4px;
        // 其他
        cursor: pointer;
      }
      // 这种适用于哪些低频次修改的代码，极端的情况是可以写到一行的，如台卡的popup样式
      .container {
        position: relative; top: 0; left: 0;
        width: 50%; height: 200px;
        display: flex; flex-wrap: wrap;
        font-size: 14px; line-height: 20px; text-align: center; color: #999999;
        background: #e6e6e6; border: 1px solid #666666; border-radius: 4px;
      }
      ```
  3. 合理的利用css预处理器的能力  
      提供了css代码的复用机制  @extend  @mixin和@include
      - @extend 
        一个样式与另一个样式相同，仅有细小的差别
        ```scss
        .error {
          border: 1px #f00;
          background-color: #fdd;
        }
        .seriousError {
          @extend .error;
          border-width: 3px;
        }
        ```
      - @mixin和@include
        混合样式
        ```scss
        @mixin large-text {
          color: #ff0000;
        }
        .page-title {
          @include large-text;
          padding: 4px;
          margin-top: 10px;
        }
        ```
        还可以传参数 动态混入
        ```scss
        @mixin sexy-border($color, $width) {
          border: {
            color: $color;
            width: $width;
            style: dashed;
          }
        }
        p {
          @include sexy-border(blue, 1in);
        }
        ```
### 如何组织
  1. 全局css
      - reset.scss    浏览器样式统一
      - var.scss     全局css变量
      - override_element_ui.scss    组件库样式修改
      - common.scss   全局定义的样式
  2. 局部css  
      - 各个框架都是通过style标签插入到head中，如何保证唯一  
        1. vue angular
            计算文件的hash值，通过唯一的自定义属性，添加到每个样式的后面
            ```html
            <div data-v-34ba45d6 class="left-img fl"></div>
            ```
            ```css
            .left-img[data-v-34ba45d6] { }
            ```
            缺点：给class多加了一个权重，影响样式的优先级
                 属性选择器在选择器中的性能是比较差的
        2. react  
            通过css-in-js 将写在js中的css，转为自动生成的随机字符串为className保证唯一
            ```js
            const useStyle = createUseStyles({
              timePicker: {
                width: "100%",
                height: "40px",
                backgroundColor: "#fff",
                padding: "0 10px",
              },
            })
            const style = useStyle()
            ```
            ```html
            <div className={ style.timePicker}></div>
            ```
            ```html
            <div className="67bj12a"></div>
            ```
            ```css
            .67bj12a { }
            ```
            缺点：占用js运行
        3. css module (css-loader)
            通过在改变class的名字来保证唯一性，如 .asd -> .asd_h68ss9hb
        4. 命名空间
            ```css
            .componentA {
              .title {}
              > img {}
            }
            ```
            ```css
            .container_1603467297843 { }
            ```
      - 一些css范式
        1. BEM规范
            所产出的样式一般都是三级以内的  
            B 块   
            E 元素   
            M 修饰符  
            block-name__element-name--modifier-name  
            模块名 + 元素名 + 修饰器名  
            一般适合UI框架  
            ****
            el-button  
            el-button--primary  
            el-button--info  
            el-button--warning
            el-buttom--small
            ****
            el-date-picker  
            el-date-picker__time-header  
            el-date-picker__editor-wrap  
            el-date-picker__header  
            el-picker-panel__content  
            el-picker-panel__body-wrapper  
            el-picker-panel__body  
            el-picker-panel__footer  
            ****
            lc-card
            lc-card__head
            lc-card__body
            lc-card--full

        2. OOCSS  
            结构和内容分离  
            容器和皮肤分离
            ```css
            .skin {
              border: solid 1px #ccc;
              background: linear-gradient(#ccc, #222);
              box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
            }
            .box {
              width: 400px;
              overflow: hidden;
            }
            ```
            `<div class="shin box"></div>` 
        3. Atomic CSS 原子类  
            ```scss
            // 填充
            @for $num from 1 through 100 {
              *[data-pd_#{$num}], .pd_#{$num} { padding: #{$num}px; }
              *[data-pd_h#{$num}], .pd_h#{$num} { padding-left: #{$num}px; padding-right: #{$num}px; }  // horizontal 横
              *[data-pd_v#{$num}], .pd_v#{$num} { padding-top: #{$num}px; padding-bottom: #{$num}px; }  // vertical 竖
              *[data-pd_t#{$num}], .pd_t#{$num} { padding-top: #{$num}px; }  // top
              *[data-pd_b#{$num}], .pd_b#{$num} { padding-bottom: #{$num}px; }  // bottom
              *[data-pd_l#{$num}], .pd_l#{$num} { padding-left: #{$num}px; }  // left
              *[data-pd_r#{$num}], .pd_r#{$num} { padding-right: #{$num}px; }  // right

              *[data-mr#{$num}], .mr_#{$num} { margin: #{$num}px; }
              *[data-mr_h#{$num}], .mr_h#{$num} { margin-left: #{$num}px; margin-right: #{$num}px; }  // horizontal 横
              *[data-mr_v#{$num}], .mr_v#{$num} { margin-top: #{$num}px; margin-bottom: #{$num}px; }  // vertical 竖
              *[data-mr_t#{$num}], .mr_t#{$num} { margin-top: #{$num}px; }  // top
              *[data-mr_b#{$num}], .mr_b#{$num} { margin-bottom: #{$num}px; }  // bottom
              *[data-mr_l#{$num}], .mr_l#{$num} { margin-left: #{$num}px; }  // left
              *[data-mr_r#{$num}], .mr_r#{$num} { margin-right: #{$num}px; }  // right
            }
            ```
            解释例子：pd_r20: padding-right: 20px;  
            ```html
            <div data-v-pd_r20 data-v-mr_h30>我是文本</div>
            <div class="pd_r20 mr_h30">我是文本</div>
            ```
            care-metacss

## 样式调优   对于浏览器来说
- 浏览器匹配css的规则  
  从右向左匹配，走到底或因不匹配而退出  
  选择器的层级越多，匹配的越慢  
  比从左往右要节约70%的时间
- 各种选择器的匹配性能排行
  1. id选择器（#myid）
  2. 类选择器（.myclassname）
  3. 标签选择器（div, h1, p）
  4. 相邻选择器（h1 + p）
  5. 子选择器（ul > li）
  6. 后代选择器（li a）
  7. 通配符选择器（*）
  8. 属性选择器（a[rel="external"]）
  9. 伪类选择器（a:hover, li:nth-child）
### 解决方法
1. 尽量使用高性能的选择器
2. 尽量降低选择器的层级，加快匹配过程