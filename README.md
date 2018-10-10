# typescript
ts是ecmascript的超集，它是基于最新的ecmascript的标准，同时ts也实现了ecmascrpt尚未实现的功能
## 基础类型
``` javascript
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
```

