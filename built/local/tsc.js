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
class Person {
    constructor(username, age, gender) {
        this.username = username;
        this.age = age;
        this.gender = gender;
    }
    say() {
        console.log(`hello ${this.username} , my age is ${this.age},my sex is ${this.gender}`);
    }
}
let p1 = new Person('caojing', 18, '男');
p1.say();
class Student extends Person {
    constructor(username, age, gender) {
        super(username, age, gender);
    }
    getAge() {
        return this.age;
    }
}
let s1 = new Student('cccc', 18, '女');
s1.say();
s1.username = 'ccc';
console.log(s1.username);
console.log(s1.gender);
console.log(s1.getAge());
function fn1(x, y) {
    return x + y;
}
fn1(10, 20);
let fn2 = function (x, y) {
    return x + y;
};
function fn3(x, y) {
    return x + y;
}
fn3(0);
function fn4(x, y = 1) {
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
class Man {
    constructor(age) {
        this._age = age;
    }
    ;
    set age(newAge) {
        if (newAge < 200) {
            this._age = newAge;
        }
    }
    ;
    get age() {
        return this._age;
    }
}
let m1 = new Man(10);
m1.age = 201;
console.log(m1.age);
m1.age = 100;
console.log(m1.age);
class Teacher {
    constructor(age) {
        this.age = age;
    }
}
Teacher.work = '人民教师最光荣';
let t1 = new Teacher(10);
console.log(Teacher.work);
//# sourceMappingURL=tsc.js.map