class User {
    constructor(name, age) {
        this._name = name;
        this._age = age
    }

    get name() {
        return this._name;
    }
    get age() {
        return this.age;
    }

    set name(name) {
        return this._name;
    }
    set age(age) {
        if(typeof age !== 'number' || age < 1 || age > 100) {
            throw new Error("Age should be a number and between 1 and 100");
        } else
             this._age = age;
    }
}

const userProxy = new Proxy(User, {
    construct(target, args) {
        return new target(...args);
    }
});

const user = new userProxy("vishal", 24);
console.log(user.name);
console.log(user.age);