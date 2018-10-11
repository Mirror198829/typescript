/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-10 17:26:34 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-11 11:37:16
 */
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

