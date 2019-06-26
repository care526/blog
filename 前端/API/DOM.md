## 选取文档节点
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
## 各种标签的属性，当获取到节点后，调用.属性来使用其属性
如 img.src form.action ......    
DOM.offsetWidth  自己的宽度  
DOM.offsetHeight 自己的高度  
DOM.offsetTop    相对于父元素的顶部的距离   
DOM.offsetLeft   相对于父元素的左边的距离   
DOM.offsetParent  是当前DOM的有定位属性的第一个上层元素,如果不存在返回null，有浏览器兼容性问题(以后在补充)     

## 设置属性
```
setAttribute("XXX","XXX") 属性名 属性值   
hasAttribute("XXX") 检测是否存在某个属性  
removeAttribute("XXX") 移除某个属性   
```
## 创建节点
```
document.createTextNode("文本") 文本节点的创建   
document.createElement("div") Element节点的创建  
cloneNode() 节点调用该方法，返回该节点的全新副本，传true参数，可深拷贝，递归的复制其后代的所有节点   
```
## 插入节点
```
parent.appendChild("newNode") 将newChild插入到parent节点子节点的最后面   
parent.insertBefore(newNode,childNode) 将newNode插入到parent的这个childNode子节点的前面，如果第二个参数是null，则将节点插入到parent子节点的最后面    
```

## 删除节点
```
parent.removeChild(node) 删除parent下的node子节点  
parent.replaceChild(newNode,node) 将parent下的node子节点用newNode节点代替  
```
## 创建DOM结点
```
var node = document.createElement('div')  
创建一个结点，并将该dom结点对象赋值给node变量  
```
## 创建文本结点
```
var node=document.createTextNode('我是新增的文本节点')   
创建一个文本结点，并将该文本结点赋值给node变量  
添加结点（可以是文本结点或DOM结点）  
A.appendChild(B):  
将B添加到A的子元素的最后一个位置  
parent.insertBefore(newNode, exitsNode):  
将newNode插入到exitsNode（是parent的子元素）的前面，如果第二个参数不存在，则插入到最后  
insertAdjacentElement  
它包括两个参数，其中第二个参数是要加的子节点，核心在于第一个参数，有如下的取值  
beforebegin:把第二个参数加到当前节点的前面  
afterend：把第二个参数加到当前节点的后面  
afterbegin：把第二个参数加到当前节点的第一个子节点位置  
beforeend：把第二个参数加到当前节点的最后一个节点的位置  
```
## 删除结点
```
通过ID选取元素(id属性)  
document.getElementById("id名")  
通过名字选取元素(name属性)  
document.getElementsByName("name")  
通过标签名选取元素(标签)  
document.getElementsByTagName("span")  
通过CSS类选取元素(class)  
document.getElementsByClassName("class")  
```