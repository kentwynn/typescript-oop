export class User<T, U> {
  name: T;
  age: U;
  constructor(name: T, age: U) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log('Hello!');
  }
}

export interface UserInterface<T, U> {
  name: T;
  age: U;
  speak(): void;
}

export interface UserInterfaceWithConstructor<T, U> {
  new (name: T, age: U): UserInterface<T, U>;
}

export function createUserClass<T, U>(): UserInterfaceWithConstructor<T, U> {
  return class UserClass implements UserInterface<T, U> {
    name: T;
    age: U;
    constructor(name: T, age: U) {
      this.name = name;
      this.age = age;
    }
    speak() {
      console.log('Hello!');
    }
  };
}

export interface User1 extends UserInterface<string, number> {
  speakSpanish(): void;
}

export interface User2 extends UserInterface<string, number> {
  speakFrench(): void;
}

const user = new User<string, number>('Spike', 3);
user.speak();
console.log(user.name);

const user1: User1 = {
  name: 'Spike',
  age: 3,
  speak() {
    console.log('Hello!');
  },
  speakSpanish() {
    console.log('Hola!');
  },
};
user1.speak();
user1.speakSpanish();
console.log(user1.name);
