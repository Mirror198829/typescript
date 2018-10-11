/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-10 17:26:34 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-11 09:49:05
 */
//es6,写法更加繁复
// class Person{
//     constructor(name){
//         this.name = name ;
//     }
// }
class Person {
    username:string;
    constructor(username:string){
        this.username = username
    }
    say():void{
        console.log(`hello ${this.username}`)
    }
}
let p1 = new Person('caojing')
p1.say()
