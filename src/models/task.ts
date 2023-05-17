/* eslint-disable no-unused-vars */
export type TaskStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Task implements TaskStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id: string;
  isAdopted: boolean;
  constructor(public name: string, public owner: string, public breed: string) {
    this.id = Task.generateID();
    this.isAdopted = false;
  }
}
