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
//# sourceMappingURL=tsc.js.map