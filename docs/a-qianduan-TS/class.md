# 类

## 基本
```ts
// 建议首字母大写
class Student {
    // 类的静态属性
    static origin = {x: 0, y: 0}
    // 类成员
    name: string
    // 构造函数
    constructor(name: string) { 
        this.name = name
    }

    // 存取器
    get name(): string {
        return this.name
    }
    set name(theName: string): void {
        // 一般这里会做一些判断/计算，再赋值
        this.name = thisName
    }
}
```

## 修饰符
- public
  默认 自由的访问程序里定义的成员
- private
  不能在声明它的外部使用
- protected
  同private，但派生类中仍然可以访问
- readonly
  将属性设置为只读，只读属性必须在声明时或构造函数里被初始化

## 继承
```ts
class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move() {
        console.log('Animal move')
    }
}

class Dog extends Animal {
    private age: number

    constructor(name: string, age: number) {
        // 子类的构造函数第一行必须写super方法，来初始化，后面才能使用this
        super(name)
        this.age = age
    }

    // 重载，覆盖基类的方法
    move() {
        // 调用基类的方法
        super.move()
        console.log('Animal move')
    }

    public bark() {
        console.log('Woof! Woof!')
    }
}

let dog1: Animal = new Animal("world1")
let dog1: Dog = new Animal("world2")
```

## 抽象类
抽象类做为其它派生类的基类使用  
定义类所包含的属性和方法  
未具体实现的方法必须标有abstract修饰符  
不能在子类中定义抽象类中没有的方法
```ts
abstract class Department {
    name: string

    constructor(public name: string) {
        this.name = name
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('care')
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
}
```

## 作为接口
```ts
class Point {
    x: number
    y: number
}

interface Point3d extends Point {
    z: number
}
```