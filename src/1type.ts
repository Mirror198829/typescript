/*
 * @Author: caojing https://github.com/Mirror198829 
 * @Date: 2018-10-10 10:45:50 
 * @Last Modified by: caojing https://github.com/Mirror198829
 * @Last Modified time: 2018-10-12 16:03:15
 */

 //基础类型
 //布尔类型
 let isShow: boolean = false;
 //数字类型
 let decLiteral:number = 6;
 let hexLiteral:number = 0xf00d;//二进制
 let binaryLiteral:number = 0o744;
 //字符串
 let username: string = "caojing";
 let age: number = 20;
 let sentence: string = `hello,my name is ${username}.I'll be ${ age + 1} years old next month`;
 //数组
 let list: number[] = [1,2,3];
 let arrLst: Array<number> = [1,2,3]; 
/*
 元组Tuple
 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比
*/
 let x: [string,number];
 x = ['hello',10]

 /*
  枚举enum
  是对js标准数据类型的补充，使用枚举类型可以为一组数值赋予友好的名字
 */
enum Color {Red,Green,Blue}
let c:Color = Color.Green
console.log(c) //1

//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值
enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
console.log(c1) //2

enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color2[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

//枚举应用，代替以下的写法
let obj = {
    init:0,
    success:1,
    error:2
}
let res
if(res == obj.success){

}
//示例2
enum GENDER{
    MALE,
    FEMALE
}
let sex:GENDER = GENDER.MALE
console.log(`性别是：${sex}`)
/**
 * Any
 * 为不清楚类型的变量指定一个类型
 */
let notSure: any = 4;
notSure = 'not sure';
notSure = false

let anyLst: any[] = [1,true,'free'];

/**
 * Void
 * 类型与any类型相反，表示没有任何类型，
 * 当一个函数没有返回值时，通常会见到其返回值类型时void
 */
function warnUser():void{
    console.log('this is void type')
}
//声明一个void类型的变量没有大作用，因为只能赋予undefined或者null
let unusable:void = undefined;
let unusable1:void = null;

/**
 * Null 和 Undefined
 * ts里，undefined和null 和void类似，本身的类型用处不是很大
 */
let u: undefined = undefined;
let n: null = null;

/**
 * Never
 * 表示永不存在的值的类型。never类型是那些总是会抛出异常或根本没有返回值的函数表达式或箭头函数
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * 类型断言
 * 两种语法如下
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//另一个as语法，在ts的jsx时，只有as语法
let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;
