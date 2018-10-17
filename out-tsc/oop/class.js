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
//# sourceMappingURL=class.js.map