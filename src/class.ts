/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-10 17:26:34 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-10 17:41:27
 */
//es6,写法更加繁复
// class Person{
//     constructor(name){
//         this.name = name ;
//     }
// }
class Person {
    name:string;
    age:number;
    say():void{
        console.log(this.name)
    }
}
let p1:Person = new Person()
p1.say()