/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-11 14:12:27 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-11 14:26:20
 */
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