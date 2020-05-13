"use strict";
var Person = /** @class */ (function () {
    function Person(name, age, subject) {
        this.name = name;
        this.age = age;
        this._subject = subject;
    }
    Person.isAdult = function (age) {
        return age >= 18;
    };
    Object.defineProperty(Person.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (val) {
            this._subject = val + 2;
        },
        enumerable: true,
        configurable: true
    });
    // constructorの省略した書き方
    // constructor(public name: string, private age: number) {
    // }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello My name is " + this.name + ". I'm 29 years old");
    };
    Person.species = 'Home sapiens';
    return Person;
}());
var atsu = new Person('Atsushi', 29, 'こんにちは');
console.log(atsu);
atsu.greeting();
atsu.incrementAge();
atsu.greeting();
console.log(atsu.subject);
atsu.subject = 'test';
console.log(atsu.subject);
console.log(Person.isAdult(20));
