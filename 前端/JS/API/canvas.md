## canvas标签
`<canvas width="150" height="150"></canvas>`
如果不指定宽高，默认为300 * 150
如果使用css来指定宽高，绘制出来的图像可能是扭曲的，建议在标签里设置

## 绘制的步骤
1. 获取canvas标签的DOM元素
   `var care = document.getElementById('care')`
2. 获取渲染上下文对象
   `var ctx = canvas.getContext("2d");`
3. 绘制图形
   - 矩形


ctx.fillRect(100, 100, 100, 100)
ctx.clearRect(100, 100, 50, 50)

ctx.strokeRect(200, 100, 100, 100)