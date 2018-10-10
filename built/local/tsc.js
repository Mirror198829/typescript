function fn1(x, y) {
    return x + y;
}
fn1(10, 20);
var fn2 = function (x, y) {
    return x + y;
};
function fn3(x, y) {
    return x + y;
}
fn3(0);
function fn4(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
fn4(1);
function fn5(x, y) {
    if (typeof x == 'number') {
        return x * y;
    }
    else {
        return x + y;
    }
}
fn5(1, 2);
fn5('abc', 'edf');
var isShow = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 484;
var username = "caojing";
var age = 20;
var sentence = "hello,my name is " + username + ".I'll be " + (age + 1) + " years old next month";
var list = [1, 2, 3];
var arrLst = [1, 2, 3];
var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color2[2];
console.log(colorName);
var obj = {
    init: 0,
    success: 1,
    error: 2
};
var res;
if (res == obj.success) {
}
var notSure = 4;
notSure = 'not sure';
notSure = false;
var anyLst = [1, true, 'free'];
function warnUser() {
    console.log('this is void type');
}
var unusable = undefined;
var unusable1 = null;
var u = undefined;
var n = null;
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
var someValue = "this is a string";
var strLength = someValue.length;
var someValue1 = "this is a string";
var strLength1 = someValue.length;
//# sourceMappingURL=tsc.js.map