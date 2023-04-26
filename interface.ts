export interface Animal {
  name: string;
  age: number;
  speak(): void;
}
export interface Dog extends Animal {
  breed: string;
}
export interface Cat extends Animal {
  color: string;
}
export interface Snake extends Animal {
  length: number;
}

export type AnimalType = Dog | Cat | Snake;

export interface Zoo {
  animals: Animal[];
  addAnimal(animal: Animal): void;
  getAnimalNames(): string[];
}
export class ZooClass implements Zoo {
  animals: Animal[] = [];

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  getAnimalNames() {
    return this.animals.map((animal) => animal.name);
  }
}
