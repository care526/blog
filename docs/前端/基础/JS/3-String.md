# String

### charAt(number) <返回一个长度为1的字符串，不改变原字符串>  
取出一个字符串中指定位置的字符  
如果参数不在 0-length-1 范围内，返回空字符串 “”  
“asd”.charAt(1) // 返回 “s”  


### concat(value,.....) <返回连接后的字符串，不改变原字符串>
var a = “a”；  
b = a.concat("b","c","d") //b：“abcd” a：“a”  
使用“+”操作符来连接字符串更简单  
以上程序可改为 b = a + “b” + “c” + “d”  


### indexOf(string,start) <返回一个数字，不改变原字符串>
搜索一个字符串，返回匹配子字符串第一个字符的位置，匹配不成功返回 -1  
第二个参数可选，指定从字符串那个位置开始搜索  
“asdf”.indexOf("sd") // 返回 1  
“asdf”.indexOf("sd",2) //返回 -1  
“asdfgh”.indexOf("gh",2) /返回 4  


### includes(string,start) <返回一个布尔值，不改变原字符串>
搜索一个字符串，确定字符串是否被包含在字符串里，是返回true，否则返回false  
第二个参数可选，表示开始搜索的位置  
"Hello world".includes("Hello") //true  
"Hello world".includes("Hello",4) //false  


### startsWith(string,start) <返回一个布尔值，不改变原字符串>
搜索一个字符串，确定字符串是否被包含在字符串的头部，是返回true，否则返回false  
第二个参数可选，表示开始搜索的位置（包含该位）  
"Hello world".startsWith("Hello") //true  
"Hello world".startsWith("world",6) //true  


### endsWith(string,start) <返回一个布尔值，不改变原字符串>
搜索一个字符串，确定字符串是否被包含在字符串的尾部，是返回true，否则返回false  
第二个参数可选，表示在前start位的字符串中的尾部是否包含（不包含该位）  
"Hello world".endsWith("world") //true  
"Hello world".endsWith("Hello",5) //true  


### lastIndexOf(string,start) <返回一个数字，不改变原字符串>
同上，从后向前搜索  
指定start时，从指定位置向前搜索  
返回匹配子字符串第一个字符的位置，匹配不成功返回 -1  


### match() <返回一个数组，不改变原字符串>
当正则表达式没有 g 时，执行一次匹配  
没有找到匹配的结果，返回null  
找到返回一个数组，数组的元素0为匹配文本，剩下的元素为匹配的正则表达式中圆括号子表达式  
数组还有两个属性，index为匹配的文本在string中的开始位置，input为该string本身的引用  
当正则表达式有 g 时，执行一次全局搜索，在string中寻找匹配的所有子串  
没有找到匹配的结果，返回null  
找到返回一个由匹配的子串组成的数组（没有额外的属性，也不会记录匹配的子串在string中的位置）  


### replace(regexp,replacement) <返回一个新的字符串，不改变原字符串>
regexp：一个正则表达式。若是一个直接量string，它将作一个要搜索的直接量的string  
replacement：一个要替换的文本string，或者为一个函数（返回一个string的函数）  
返回一个新的字符串，原字符串中匹配regexp的地方，都替换为了replacement  
若regexp是string或没有g的正则表达式，只会替换第一个匹配的子串。有g的正则匹配的子串都会替换  
在reliacement中的$有特殊含义，如下：  
$1,$2,.....$99 匹配1~99个regexp中的圆括号子表达式中的文本  
$& 匹配regexp的子串   
$$ 美元符号  

### search(regexp) <返回一个数字，不改变原字符串>  
regexp如果不是正则，会先传入正则RegExp()构造函数，返回一个RegExp对象  
返回string中第一个匹配的regexp的子串开始的位置，没有匹配的返回-1（该方法不执行全局匹配，会忽略g标志，也会忽略regxexp的lastIndex属性，总是从string的开始位置开始搜索）  
```js
'123'.search(2);  // 1
'321123'.search(/1/g);  // 2 
```


### slice(start,end) <返回一个字符串，不改变原字符串>  
提取一个子字符串  
start：开始位置，负数表示倒数  
end：结束位置（不包括），负数表示倒数，不指定表示到字符串结尾  
```
“abcdefg”.slice(0,4) //"abcd"  
“abcdefg”.slice(2,4) //"cd"  
“abcdefg”.slice(4) //“efg”  
“abcdefg”.slice(3，-2) //“de”  
```


### split(delimiter,limit) <返回一个数组，不改变原字符串>
将字符串切分为一个由字符串组成的数组  
delimiter：string切分处的字符串或正则表达式（分割文本不包含在子串中，  
如果分割字符在string尾部，返回的数组的最后一个子串是空字符串  
如果delimiter为空，返回一个只包含未切割的string的一个数组  
如果delimiter为空字符串或匹配空字符的正则，string会在每个字符的前后断开，特例：第一个字符之前和最后一个字符之后的空字符不匹配，返回的数组和string的长度一样  
如果正则表达式的中有圆括号，则匹配的文本也会包含在数组中）  
limit：指定返回数组的最大长度，如果不指定，将返回切分整个字符串的数组  
```
"1:2:3:4:5".split(":") // [“1”，“2”，“3”，“4”，“5”]  
"|2|3|4|".split(":") // [“”，“2”，“3”，“4”，“”]  
“hello”.split("") // ["h","e","l","l","o"]  
“hello”.split("",3) // ["h","e","l"]  
"hello <b>world</b>".split(/(<[^>]*>)/) // ["hello ","<b>","world","</b>"]  
```


### substring(from,to) <返回一个字符串，不改变原字符串>
使用方法同 slice() ，但是参数不能为负数  
若from > to，该方法会交换这两个参数的数值，再执行  


### toLowerCase() <返回字符串的副本，不改变原字符串>
将字符串的所有大写字符转变为小写  


### toUpperCase() <返回字符串的副本，不改变原字符串>
将字符串的所有小写字符转变为大写  


### trim() <返回一个字符串，不改变原字符串>
去掉开头和结尾的空字符，中间的去不掉  
“ asd ”.trim(); //得到“asd”  


### repeat( n ) <返回一个新字符串，不改变原字符串>
将原字符串重复n次返回
n为小数向下取整，负数报错（若是0到-1间的小数，则为0），NaN为0，字符串先转化为数字
```
“na”.repeat(2) //“nana”
“na”.repeat(3.5) //“nanana”
“na”.repeat(-1) //报错
“na”.repeat(NaN) //“”
“na”.repeat(-0.7) //“”
“na”.repeat(“na”) //“”
“na”.repeat(“3”) //“nanana”
```


### padStart(number, string) <返回一个新的字符串，不改变原字符串>


### padEnd(number, string) <返回一个新的字符串，不改变原字符串>
number：补全的字符串的长度  
情况一：原字符串长度大于或等于number，就不用补全了，返回原字符串  
情况二：原字符串长度 + string的长度 > number，截去string超出的部分，然后补全字符串  
string：用于补全的字符串，这个参数如果没传，默认用一个空格字符代替来补全  
```
"x".padStart(5, "ab"); //"ababx"
"x".padEnd(4, "ab"); //"xaba"
"xxxx".padStart(2, "ab"); //"xxxx"
"xxxx".padEnd(2, "ab"); //"xxxx"
"xx".padStart(6, "0123456789"); //"xx01234"
"xxxx".padStart(6); //"xxxx " 后面加两个空格
用途：为数值补全全指定位数　提示字符串格式
"12".padStart(10, "0"); // "0000000012"
"12".padStart(10, "YYYY-MM-DD") // "YYYY-MM-12"
"09-12".padStart(10, "YYYY-MM-DD") // "YYYY-09-12"
```