# Java

## 对象与类
```
class Person {  //类名首字母大写
    //实例化对象需要的属性
    //将属性设置为私有，通过共有的get，set方法获取和设置，叫“封装”
    //不能将一个引用类型的数据return出去，这样会破坏数据的封装性
    private String name;  //姓名 
    private int age;  //年龄
    /*------------------------------*/
    //默认构造函数，如果不写，编译的时候会自动加上
    //将数值类型设为0；将布尔类型设为false；将对象类型设为null
    public Person () {
        this.name = "";
        this.age = 0;
    }
    /*构造函数*/
    public Person (String name) {
        this.name = name;
    }
    /*构造函数*/
    public Person (String name, int age) {
        this(name);  //调用其他构造函数,必须放在第一个
        this.age = age;
    }
    //一个类可以有多个构造函数，但是名字一定要相同，参数要不同，这个情况称为“重载”
    /*------------------------------*/
    /*属性的访问和设置接口*/
    public getName () { return this.name; }
    public setName (String name) { this.name = name; }
    public getAge () { return this.age; }
    public setAge (int age) { this.age = age; }
    /*------------------------------*/
    //静态域和静态方法,不能操作实例对象。所以不要在静态方法中使用实例属性
    //main函数(类可以有也可以没有)，一般用于类的单元测试
    public static void main (String[] args) {}  //参数是接受的测试变量
    //所有对象共享这一个静态域
    static String country = "China";
    final
    public static getCountry () { return country; }
    /*------------------------------*/
    //常量，用final修饰的变量只能赋值一次
    //如果修饰的是引用类型的变量，那么引用指向不可改变，但是内部的属性可以修改
    public final double Pai = 3.1415929;  //常量首字母大写
    /*------------------------------*/
    //还有一种初始化属性的方式 => 初始化块(如果不在构造函数中初始化)
    {
        this.name = "";
        this.age = 0;
    }
}
```

## 继承
```
class Man extend Person { 
    
}
```

## 多线程