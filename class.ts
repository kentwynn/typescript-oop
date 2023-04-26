export class MyAnimal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log('Hello!');
  }
}

const myAnimal = new MyAnimal('Spike', 3);
myAnimal.speak();
