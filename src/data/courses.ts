export type Course = {
  id: number;
  title: string;
  instructor: string;
  schedule: string;
  capacity: number;
};

export const courses: Course[] = [
  { id: 1, title: "Spinning", instructor: "Laura Mejia", schedule: "06:00", capacity: 20 },
  { id: 2, title: "CrossFit", instructor: "Andres Ramirez", schedule: "18:00", capacity: 15 },
  { id: 3, title: "Yoga", instructor: "Camila Torres", schedule: "07:30", capacity: 25 }
];
