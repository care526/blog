## 二进制流下载
```
const blob = new Blob([result], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"})
Temp = document.createElement("a");
Temp.href = window.URL.createObjectURL(blob);
Temp.download =new Date().getTime()+'excel'  // file name
$('body').append(Temp);
Temp.click();
```