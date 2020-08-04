## 二进制流下载
```js
const blob = new Blob([result], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"})
const Temp = document.createElement("a");

Temp.href = window.URL.createObjectURL(blob);
Temp.download = +new Date() + '.excel'  // set file name
$('body').append(Temp);
Temp.click();
```