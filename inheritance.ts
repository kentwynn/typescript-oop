export class Animal {
  legs: number;
  constructor(public name: string, public age: number) {}
  speak() {
    console.log('Hello!');
  }
}

export class Dog extends Animal {
  constructor(public name: string, public age: number, public breed: string) {
    super(name, age);
  }
  speak() {
    super.speak();
    console.log('Woof!');
  }
}

export class Cat implements Animal {
  legs = 4;
  _name: string;
  _age: number;
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get age() {
    return this._age;
  }
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  speak() {
    console.log('Meow!');
  }
}

export class Snake implements Animal {
  legs = 0;
  constructor(public name: string, public age: number) {}
  speak() {
    console.log('Hiss!');
  }
}

const myAnimal = new Animal('Spike', 3);
myAnimal.speak();
console.log(myAnimal.name);

const myDog = new Dog('Spike', 3, 'Labrador');
myDog.speak();
console.log(myDog.name);

const myCat = new Cat('Spike', 3);
myCat.speak();
console.log(myCat.name);

console.log(myCat instanceof Animal); //false
console.log(myDog instanceof Animal); //true
