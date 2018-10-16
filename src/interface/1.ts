/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-12 09:47:13 
 * @Last Modified by: caojing
 * @Last Modified time: 2018-10-16 15:29:39
 */

//示例1：基本的一个接口写法，等同于下面的示例2
// function printLabel(labelObj:{label:string}){
//     console.log(labelObj.label)
// }
// let myObj = {label:'interface',size:10}
// printLabel(myObj)



//示例2：
// interface labelValue{
//     label:string,
//     age:number
// }
// function printLabel(labelObj:labelValue){
//     console.log(labelObj.label)
// }
//printLabel({label:'caojing',age:18})



//示例3:
//利用接口声明属性
// interface animalLabel{
//     name:string;
//     age:number
// }
// class Animal{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     sing(){
//         console.log(this.name)
//     }
// }
// let a1:Animal = new Animal('dog',18)
// a1.sing() 

//示例四：
interface A{
    x:number,
    y:number
}
interface B{
    x:number,
    y:number,
    z:number
}
let a : A|B = {x:111,y:222};
console.log(a.x)