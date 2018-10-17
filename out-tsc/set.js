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
//# sourceMappingURL=set.js.map