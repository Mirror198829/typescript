/*
 * @Author: caojing 
 * @Date: 2018-10-16 15:33:22 
 * @Last Modified by: caojing
 * @Last Modified time: 2018-10-16 15:40:18
 */
class Per{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    showMe(){
        console.log(`我的名字${this.name},我的年龄是${this.age}`)
    }
}
let per1:Per = new Per('blue',18)
per1.showMe()