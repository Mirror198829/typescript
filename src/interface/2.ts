/*
 * @Author: caojing 
 * @Date: 2018-10-17 11:09:58 
 * @Last Modified by: caojing
 * @Last Modified time: 2018-10-17 11:37:43
 */
interface LabelValue{
    label:string
}
function printLabel(labelObj:LabelValue){
    console.log(labelObj)
}
//printLabel({label:'ccc',age:10}) //错误，不能这样写
let myObj = {label:'ccc',age:10}
printLabel(myObj)

interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});
