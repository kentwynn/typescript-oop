export class GetterSetterClass {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get age() {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }
  speak() {
    console.log('Hello!');
  }
}

const myAnimal = new GetterSetterClass('Spike', 3);
myAnimal.speak();
console.log(myAnimal.name);
myAnimal.name = 'Spike the Dog';
console.log(myAnimal.name);
