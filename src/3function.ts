/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-10 16:45:11 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-10 17:23:36
 */
//声明式函数
function fn1(x:number,y:number):number{
    return x + y;
}
fn1(10,20)

//let fn2 = function(){}
let fn2:(x:number,y:number) => number = function(x,y):number{
    return x+y;
}
//可选参数
function fn3(x:number,y?:number):number{
    return x + y;
}
fn3(0)
//默认值
function fn4(x:number,y:number = 1):number{
    return x + y;
}
fn4(1)
//函数重载
function fn5(x:number,y:number):number;
function fn5(x:string,y:string):string;
function fn5(x:any,y:any):any{
    if(typeof x == 'number'){
        return x * y; 
    }else{
        return x + y;
    }
}
fn5(1,2);
fn5('abc','edf');