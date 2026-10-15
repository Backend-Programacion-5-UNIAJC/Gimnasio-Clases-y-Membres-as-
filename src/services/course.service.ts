import { Course, courses } from "../data/courses";

let nextId = Math.max(...courses.map((c) => c.id)) + 1;

export function listCourses(): Course[] {
  return courses;
}

export function findCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function createCourse(data: Omit<Course, "id">): Course {
  const newCourse: Course = { id: nextId++, ...data };
  courses.push(newCourse);
  return newCourse;
}

export function updateCourse(id: number, data: Partial<Omit<Course, "id">>): Course | undefined {
  const course = findCourseById(id);
  if (!course) return undefined;
  if (data.title !== undefined) course.title = data.title;
  if (data.instructor !== undefined) course.instructor = data.instructor;
  if (data.schedule !== undefined) course.schedule = data.schedule;
  if (data.capacity !== undefined) course.capacity = data.capacity;
  return course;
}

export function deleteCourse(id: number): boolean {
  const index = courses.findIndex((c) => c.id === id);
  if (index === -1) return false;
  courses.splice(index, 1);
  return true;
}
