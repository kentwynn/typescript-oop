//Encapsulation

export class Animal {
  private _name: string;
  private _age: number;
  public kind: string;
  protected _weight: number;
  static species: string = 'Animal';
  static isAnimal(a: any) {
    return a instanceof Animal;
  }
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
}

export class Dog extends Animal {
  private _breed: string;
  readonly _legs: number = 4;
  constructor(name: string, age: number, legs: number) {
    super(name, age);
    this._breed = 'Labrador';
    this._legs = legs;
  }
}

const myAnimal = new Animal('Spike', 3);
console.log(myAnimal);
console.log(Animal.species);
console.log(Animal.isAnimal(myAnimal));

//static without inheritance
console.log(Dog.species);
//static without inheritance
console.log(Dog.isAnimal(null));
const myDog = new Dog('Spike', 3, 3);
console.log(myDog);
//error to call private property
// mydog._name = 'Spike the Dog';
// console.log(myDog._name);
// myDog._age = 10;
myDog.kind = 'Mammal';
console.log(myDog.kind);
//error to call readonly property
// myDog._legs = 5;
// console.log(myDog._legs);
