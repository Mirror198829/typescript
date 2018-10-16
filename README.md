# typescript
ts是ecmascript的超集，它是基于最新的ecmascript的标准，同时ts也实现了ecmascrpt尚未实现的功能。微软制造。   
1.编译型语言  
2.强类型  
3.真正的面向对象：有接口、有泛型、有枚举、有访问修饰符  

## 基础类型
![avatar](https://mirror198829.github.io/static/github/type.png)
``` javascript
 //布尔类型
 let isShow: boolean = false;
 //数字类型
 let decLiteral:number = 6;
 let hexLiteral:number = 0xf00d;//二进制
 let binaryLiteral:number = 0o744;
 //字符串
 let username: string = "caojing";
 let age: number = 20;
 let sentence: string = `hello,my name is ${username}.I'll be ${ age + 1} years old next month`;
 //数组
 let list: number[] = [1,2,3];
 let arrLst: Array<number> = [1,2,3]; 
/*
 元组Tuple
 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比
*/
 let x: [string,number];
 x = ['hello',10]

 /**
  * 枚举enum
  * 是对js标准数据类型的补充，使用枚举类型可以为一组数值赋予友好的名字
  * 枚举就是把所有可能的值都展示出来
  * */
enum Color {Red,Green,Blue}
let c:Color = Color.Green
console.log(c) //1

//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值
enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
console.log(c1) //2

enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color2[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

//示例2
enum GENDER{
    MALE,
    FEMALE
}
let sex:GENDER = GENDER.MALE
console.log(`性别是：${sex}`)

/**
 * Any 
 * Any是变体变量，原来js的变量就是变体变量
 * 为不清楚类型的变量指定一个类型
 */
let notSure: any = 4;
notSure = 'not sure';
notSure = false

let anyLst: any[] = [1,true,'free'];

/**
 * Void
 * 类型与any类型相反，表示没有任何类型，
 * 当一个函数没有返回值时，通常会见到其返回值类型时void
 */
function warnUser():void{

    console.log('this is void type')
}
//声明一个void类型的变量没有大作用，因为只能赋予undefined或者null
let unusable:void = undefined;
let unusable1:void = null;

/**
 * Null 和 Undefined
 * ts里，undefined和null 和void类似，本身的类型用处不是很大
 */
let u: undefined = undefined;
let n: null = null;

/**
 * Never
 * 表示永不存在的值的类型。never类型是那些总是会抛出异常或根本没有返回值的函数表达式或箭头函数
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * 类型断言
 * 两种语法如下
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//另一个as语法，在ts的jsx时，只有as语法
let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;
```

#### 类型推测(隐式类型声明)
tsc编译器会根据类型初始值推测类型
``` javascript
let abc = 123
abc = 'ccc' //报错，上一句tsc推测其为数字类型，所以第二局赋值为字符串报错

//上述的写法等价于以下写法
let abc:number = 123

let d;
//等价于
let d:any
```
#### 联合类型
``` javascript
let connect : number | string
connect = 123
connect = '123'
connect = true //错误
```
## 类
``` javascript
//es6,写法更加繁复
// class Person{
//     constructor(name){
//         this.name = name ;
//     }
// }
class Person {
    public username:string;
    protected age:number;
    readonly gender:string;
    constructor(username:string,age:number,gender:string){
        this.username = username
        this.age = age
        this.gender = gender
    }
    say():void{
        console.log(`hello ${this.username} , my age is ${this.age},my sex is ${this.gender}`)
    }
}
 let p1:Person = new Person('caojing',18,'男')
 p1.say()
//console.log(p1.age) //错误 age是protect的
class Student extends Person{
    constructor(username:string,age:number,gender:string){
        super(username,age,gender)
    }
    getAge():number{
        return this.age
    }
}
let s1:Student = new Student('cccc',18,'女')
s1.say()
s1.username = 'ccc'
console.log(s1.username)
//s1.gender = '女' //readonly的是不允许修改值的
console.log(s1.gender)
console.log(s1.getAge())//18，当父类的age是pretected时，继承子类的方法也可以读取age
//console.log(s1.getAge())//错误，当父类的age是private时，继承子类的方法不可读取age
```
#### 访问修饰符
|修饰符|内容|特点|
|---|---|---|
|public|公有|任何人可以访问|
|private|私有|只有类内部可以访问|
|protected|受保护|只有子类能访问|
#### set
``` javascript
class Man{
    private _age:number;
    constructor(age:number){
        this._age = age;
    };
    set age(newAge:number){
        if(newAge < 200){
            this._age = newAge
        }    
    };
    get age():number{
        return this._age
    }
}
let m1:Man = new Man(10)
m1.age = 201
console.log(m1.age) //10
m1.age = 100
console.log(m1.age) //100
```
#### static
``` javascript
class Teacher{
    age:number;
    static work:string = '人民教师最光荣';
    constructor(age:number){
        this.age = age;
    }
}
let t1:Teacher = new Teacher(10)
//console.log(t1.work) //错误，因为静态成员属于类
console.log(Teacher.work)//正确
```
#### 泛型
``` javascript
/**
 * 泛型就是把类型也以参数的形式传入，定制类型使用的
 * 
 */
function fn<T>(x:T,y:T):any{
    return x
}
fn<string>('a','b');
fn<number>(1,1)
```
## 接口 Interfaces
ts的核心是类型检查  
接口的作用是规范类型。用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定。js中并无该概念。两个关键字`interface`和`implements`  
这边interface与Java的接口是有区别的  