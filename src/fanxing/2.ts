/*
 * @Author: caojing 
 * @Date: 2018-10-16 16:57:24 
 * @Last Modified by: caojing
 * @Last Modified time: 2018-10-16 17:09:07
 */
//泛型用于传递类型参数
class Calc<T,P>{
    width:T;
    height:P;
    constructor(width:T,height:P){
        this.width = width
        this.height = height
    }
}
let obj1 = new Calc<number,number>(10,20)