import { Instructor, instructors } from "../data/instructors";

let nextId = Math.max(...instructors.map((i) => i.id)) + 1;

export function listInstructors(): Instructor[] {
  return instructors;
}

export function findInstructorById(id: number): Instructor | undefined {
  return instructors.find((i) => i.id === id);
}

export function createInstructor(data: Omit<Instructor, "id">): Instructor {
  const newInstructor: Instructor = { id: nextId++, ...data };
  instructors.push(newInstructor);
  return newInstructor;
}

export function updateInstructor(id: number, data: Partial<Omit<Instructor, "id">>): Instructor | undefined {
  const instructor = findInstructorById(id);
  if (!instructor) return undefined;
  if (data.name !== undefined) instructor.name = data.name;
  if (data.email !== undefined) instructor.email = data.email;
  return instructor;
}

export function deleteInstructor(id: number): boolean {
  const index = instructors.findIndex((i) => i.id === id);
  if (index === -1) return false;
  instructors.splice(index, 1);
  return true;
}
