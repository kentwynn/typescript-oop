export class MyAnimal {
  constructor(public name: string, public age: number) {}
  speak() {
    console.log('Hello!');
  }
  run(flag?: string) {
    if (flag) {
      console.log(flag);
    } else {
      console.log('No flag!');
    }
  }

  // Overload
  runFlag(flag: string, speed?: number, distance?: number) {
    if (speed && distance) {
      console.log(flag, speed, distance);
    } else {
      console.log(flag);
    }
  }
}

const myAnimal = new MyAnimal('Spike', 3);
myAnimal.speak();
// Overload
myAnimal.run();
myAnimal.run('Flag!');
myAnimal.runFlag('Flag!');
myAnimal.runFlag('Flag!', 10);
myAnimal.runFlag('Flag!', 10, 100);
