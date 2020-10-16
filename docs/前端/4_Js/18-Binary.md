# 二进制

## blob
例：blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
可以完成的功能
- 文件下载
  通过window.URL.createObjectURL方法可以把一个blob转化为一个Blob URL，用做文件下载或者图片显示的链接
  `a.href = window.URL.createObjectURL(blob)`
  `img.src = window.URL.createObjectURL(file)`
- 文件分片
  blob.slice(start, end)
  分割大Blob为多个小Blob

## File 构造函数 （继承了Blob，具有Blob的全部方法）
- input上选择的文件
- 拖拽产生的DateTransfer对象

数据处理：
```
const reader = new FileReader()
reader.onload = function () {
  const content = reader.result
  console.log(content)
}
reader.readAsText(file)  // 提取为字符串
reader.readAsDataURL(file)  // 提取为Base64格式的Data URL
FileReader.readAsArrayBuffer(file) // 转化为ArrayBuffer格式数据
```

## ArrayBuffer
https://zhuanlan.zhihu.com/p/97768916