/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-11 14:46:50 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-11 14:49:12
 */
//泛型
/**
 * 泛型就是把类型也以参数的形式传入，定制类型使用的
 * 
 */
function fn<T>(x:T,y:T):any{
    return x
}
fn<string>('a','b');
fn<number>(1,1)