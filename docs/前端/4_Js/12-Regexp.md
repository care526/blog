# 正则

## 正则表达式的作用
1、对字符串进行测试，就是数据的有效性测试 如：电话，邮箱.....
2、查找、替换匹配的字符串中的文本
3、根据匹配模式，提取字符串中的特定部分

## 创建方法
1、构造函数 如：var a = new RegExp（"xyz","g"）；常用
2、字面量 如：var a = /aabb/g； 当需要动态匹配的时候用（匹配用户的输入，避免写死正则）

## 相关的属性
1、ignoreCase 返回一个布尔值表示正则对象是否设置了i修饰符，是一个只读属性
2、global 表示正则对象是否设置了g修饰符，返回布尔值
3、multiline 表示是否设置了m修饰符，返回一个布尔值
4、lastIndex 返回下一次开始搜索的位置，该属性可读写，但只在设置了g修饰符时有意义
5、source 返回正则表达式的字符串形式（不包括反斜杠），只读属性（就是/.../中间的部分）

## 方法
- test(string)  <返回bool>
	测试一个字符串是否匹配一个模式
	如果string包含匹配的regexp的文本返回true，否则返回false
	```js
	var patten = /java/i;
	patten.test("Javascript"); // true
	patten.test("ECMAScript"); // false
	```
- exec(string) <返回一个数组>
	通用的模式匹配，返回一个包含匹配结果的数组，否则返回null

	当正则不是全局 g 的时候（和match一样）
	数组的元素0是匹配的文本，元素1是regexp第一个带圆括号的子表达式的文本，元素2是regexp第二个带圆括号的子表达式的文本，依次类推。
	返回的数组上还有两个属性，index属性为匹配文本的第一个字符在string中的位置（0开始），input属性为原string。

	当正则不是全局g的时候
	返回的数组描述同上，但会将lastIndex属性的值改变为匹配成功后的第一个字符的位置（为下一次匹配做准备）。所以可以多次调用exec方法来遍历匹配的结果（用该方法的返回值是否为null来确定是否匹配完了）
- match
- matchAll
- search
- replace
- split

## 例子
- 匹配空格
  `/\s/g`

[常用的正则表达式](http://www.cnblogs.com/jay-xu33/archive/2010/08/18/1802536.html)
[参考文章](http://www.cnblogs.com/skylar/p/4265490.html)
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)