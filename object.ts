interface Animal {
  name: string;
  age: number;
  speak(): void;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: 'Spike',
  age: 3,
  breed: 'Labrador',
  speak() {
    console.log('Woof!');
  },
};
