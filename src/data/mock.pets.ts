import { Pet } from '../models/pets';

export const getMockPets = (): Pet[] => [
  new Pet('Misifu', 'Siames', 'Pepe'),
  new Pet('Luisa', 'Persa', 'Juan'),
  new Pet('Ernesto', 'Elfo', 'Maria'),
];
