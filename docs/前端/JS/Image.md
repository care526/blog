# Image

浏览器的原生构造函数  
返回一个HTMLImageElement对象的实例  
```js
new Image();
img instanceof Image;  // true
img instanceof HTMLImageElement;  // true
```

## 得到Image对象的4种方式
1. `new Image();`
2. document.images的成员
3. 节点选取方法得到的`<img>`节点
4. `document.createElement('img')`生成的`<img>`节点

## 属性
- src  
  图像来源
- alt
  图像的说明文字，当图片加载错误的时候显示
- complete
  图像是否已经加载完成，返回一个boolean
- naturalWidth
  图像的原始宽度，只读
- naturalHeight
  图像的原始高度，只读
- width
  图像的宽度，可读写
- height
  图像的高度，可读写

## 方法
- onload
  图像加载完成的回调方法