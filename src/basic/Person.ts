class Person {
  static species = 'Home sapiens';
  static isAdult(age: number) {
    return age >= 18;
  }

  name: string;
  private age: number;
  private _subject: string;

  get subject(): string {
    return this._subject;
  }

  set subject(val: string) {
    this._subject = val + 2;
  }

  constructor(name: string, age: number, subject: string) {
    this.name = name
    this.age = age
    this._subject = subject
  }

  // constructorの省略した書き方
  // constructor(public name: string, private age: number) {

  // }

  incrementAge() {
    this.age += 1;
  }

  greeting() {
    console.log(`Hello My name is ${this.name}. I'm 29 years old`);
  }
}

const atsu = new Person('Atsushi', 29, 'こんにちは');

console.log(atsu);
atsu.greeting();
atsu.incrementAge();
atsu.greeting();
console.log(atsu.subject);
atsu.subject = 'test';
console.log(atsu.subject);
console.log(Person.isAdult(20));

