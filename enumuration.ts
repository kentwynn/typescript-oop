export enum AnimalType {
  Dog = 'Dog',
  Cat = 'Cat',
  Snake = 'Snake',
}
export interface Dog {
  type: AnimalType.Dog;
  name: string;
  age: number;
  breed: string;
  speak(): void;
}
export interface Cat {
  type: AnimalType.Cat;
  name: string;
  age: number;
  color: string;
  speak(): void;
}
export interface Snake {
  type: AnimalType.Snake;
  name: string;
  age: number;
  length: number;
  speak(): void;
}
export type Animal = Dog | Cat | Snake;
