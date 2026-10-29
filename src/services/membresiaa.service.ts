import { membresias, Membresia } from '../data/membresia';

export function findAllMembresias(): Membresia[] {
  return membresias;
}

export function findMembresiaById(id: number): Membresia | undefined {
  return membresias.find((m) => m.id === id);
}

export function createMembresia(data: Omit<Membresia, 'id'>): Membresia {
  const newMembresia: Membresia = {
    id: membresias.length > 0 ? Math.max(...membresias.map((m) => m.id)) + 1 : 1,
    ...data
  };
  membresias.push(newMembresia);
  return newMembresia;
}

export function updateMembresia(id: number, data: Partial<Omit<Membresia, 'id'>>): Membresia | undefined {
  const index = membresias.findIndex((m) => m.id === id);
  if (index === -1) return undefined;

  membresias[index] = {
    ...membresias[index],
    ...data
  };
  return membresias[index];
}

export function deleteMembresia(id: number): boolean {
  const index = membresias.findIndex((m) => m.id === id);
  if (index === -1) return false;

  membresias.splice(index, 1);
  return true;
}
