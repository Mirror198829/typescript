/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-11 14:30:10 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-11 14:39:42
 */
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
