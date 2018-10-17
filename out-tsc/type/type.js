let isShow = false;
let decLiteral = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0o744;
let username = "caojing";
let age = 20;
let sentence = `hello,my name is ${username}.I'll be ${age + 1} years old next month`;
let list = [1, 2, 3];
let arrLst = [1, 2, 3];
let x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let colorName = Color2[2];
console.log(colorName);
let obj = {
    init: 0,
    success: 1,
    error: 2
};
let res;
if (res == obj.success) {
}
var GENDER;
(function (GENDER) {
    GENDER[GENDER["MALE"] = 0] = "MALE";
    GENDER[GENDER["FEMALE"] = 1] = "FEMALE";
})(GENDER || (GENDER = {}));
let sex = GENDER.MALE;
console.log(`性别是：${sex}`);
let notSure = 4;
notSure = 'not sure';
notSure = false;
let anyLst = [1, true, 'free'];
function warnUser() {
    console.log('this is void type');
}
let unusable = undefined;
let unusable1 = null;
let u = undefined;
let n = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
let someValue = "this is a string";
let strLength = someValue.length;
let someValue1 = "this is a string";
let strLength1 = someValue.length;
//# sourceMappingURL=type.js.map