/* eslint-disable no-unused-vars */
export type TaskStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements TaskStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id: string;
  isAdopted: boolean;
  constructor(public name: string, public breed: string, public owner: string) {
    this.id = Pet.generateID();
    this.isAdopted = false;
  }
}
