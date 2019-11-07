## 创建节点
```
document.createTextNode("文本") 文本节点的创建   
document.createElement("div") Element节点的创建  
cloneNode() 节点调用该方法，返回该节点的全新副本，传true参数，可深拷贝，递归的复制其后代的所有节点   
```
将节点添加到页面的几种方式
1. createElement
   创建节点，并添加到文档上
2. innerHTM
   `DOM.innerHTML = 'XXX'`
3. cloneNode
   克隆节点，并添加到文档上
   `DOM.cloneNode`
4. DocumentFragment
   将创建的节点先添加到fragment对象上，再将fragment对象添加到文档上
   `document.createDocumentFragment();`

## 插入节点
```
parent.appendChild("newNode") 将newChild插入到parent节点子节点的最后面   
parent.insertBefore(newNode,childNode) 将newNode插入到parent的这个childNode子节点的前面，如果第二个参数是null，则将节点插入到parent子节点的最后面    
```
添加结点（可以是文本结点或DOM结点）  
A.appendChild(B):  
将B添加到A的子元素的最后一个位置  
parent.insertBefore(newNode, exitsNode):  
insertAdjacentElement  
它包括两个参数，其中第二个参数是要加的子节点，核心在于第一个参数，有如下的取值  
beforebegin:把第二个参数加到当前节点的前面  
afterend：把第二个参数加到当前节点的后面  
afterbegin：把第二个参数加到当前节点的第一个子节点位置  
beforeend：把第二个参数加到当前节点的最后一个节点的位置  

## 获取文档节点
```
通过ID document.getElementById("id")
通过name document.getElementsByName("name")
通过标签名 document.getElementsByTagName("div")
通过class document.getElementsByClassName("class")
通过css选择器 document.querySelectorAll()
document.querySelector('#id p')
```
ps: 如果获取到的节点有多个，得到的是一个类数组，不能直接使用Array的API，可以用Array.from()转化一下   

## 文档结构的而遍历
```
parentNode 该节点的父节点  
childNodes 该节点的所有子节点（只读的类数组对象）  
firstChild 该节点的子节点中的第一个  
lastChild 该节点的子节点中的最后一个  
nextSibling 该节点的下一个兄弟节点  
previousSibling 该节点的上一个兄弟节点  
nodeType 该节点的类型     
nodeValue 该节点的文本内容  
nodeName 该节点的标签名    
```
```
firstElementChild 该节点的第一个Element节点  
lastElementChild 该节点的最后一个Element节点  
nextElementSibling 该节点的下一个兄弟Element节点   
previousElementSibling 该节点的上一个兄弟Element节点   
```

## 删除节点
```
parent.removeChild(node) 删除parent下的node子节点  
parent.replaceChild(newNode,node) 将parent下的node子节点用newNode节点代替  
```

## 定位相关
```
DOM.offsetWidth  自己的宽度  
DOM.offsetHeight 自己的高度  
DOM.offsetTop    相对于父元素的顶部的距离   
DOM.offsetLeft   相对于父元素的左边的距离   
DOM.offsetParent  是当前DOM的有定位属性的第一个上层元素,如果不存在返回null，有浏览器兼容性问题(以后在补充)     
DOM.getBoundingClientRect()  获得的数据结构 {
  top: '元素顶部相对于视口顶部的距离',
  bottom: '元素底部相对于视口顶部的距离',
  left: '元素左边相对于视口左边的距离',
  right: '元素右边相对于视口左边的距离',
  height: '元素高度',
  width: '元素宽度'
}
```

## 类名相关
DOM.className  等于下面classList的value  'a b'，可以修改
  - DOM.className += ' c'  添加类名c，c前面有个空格(其实就是修改HTML中的字符串)

DOM.classList  当前DOM元素的class名的类数组 {0: 'a', 1: 'b', length: 2, value: 'a b'}
  - DOM.classList.add('XXX')  添加XXX类名
  - DOM.classList.remove('XXX')  移除XXX类名
 
## 属性相关
```
setAttribute("XXX","XXX") 属性名 属性值   
hasAttribute("XXX") 检测是否存在某个属性  
removeAttribute("XXX") 移除某个属性   
```

### 滚动
- DOM.scrollIntoView()
  滚动DOM的顶端到滚动可视区的顶端
  ```
  DOM.scrollIntoView(true)  // 等同于不传
  DOM.scrollIntoView(false)  // 同上，底端
  DOM.scrollIntoView({
    block:    "start" | "end",  // 定义滚动到顶部还是底部
    behavior: "auto"  | "instant" | "smooth"  // 定义动画效果
  })
  ```
- DOM.scrollTop = Number
  指定滚动条到距顶端number的位置，如果数值过大，就到底部了
- 当前DOM是否在视窗中出现
  ```
  // 定义行为
  var intersectionObserver = new IntersectionObserver(function(DOM) {
    // intersectionRatio表示和根元素的交叉，0-1之间的值
    if (DOM.intersectionRatio <= 0) {
      // 不在视窗之内，做点什么
    } else {
      // 在视窗之内，做点什么
    }
  })
  // 设置监听的元素
  intersectionObserver.observe(DOM)
  ```