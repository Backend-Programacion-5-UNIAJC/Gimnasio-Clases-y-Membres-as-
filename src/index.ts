import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

type Course = {
  id: number;
  title: string;
  instructor: string;
  schedule: string;
  capacity: number;
};

const courses: Course[] = [
  { id: 1, title: "Spinning", instructor: "Laura Mejia", schedule: "06:00", capacity: 20 },
  { id: 2, title: "CrossFit", instructor: "Andres Ramirez", schedule: "18:00", capacity: 15 },
  { id: 3, title: "Yoga", instructor: "Camila Torres", schedule: "07:30", capacity: 25 }
];

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.get("/courses", (_req: Request, res: Response) => {
  res.status(200).json(courses);
});

app.get("/courses/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ error: "Clase no encontrada" });
  }

  return res.status(200).json(course);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
