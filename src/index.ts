import express, { Request, Response } from "express";
import { readFileSync } from "fs";
import { join } from "path";

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

type Membership = {
  id: number;
  tipo: string;
  precio: number;
  duracionDias: number;
};

const datos = JSON.parse(
  readFileSync(join(__dirname, "..", "data", "gimnasio.json"), "utf-8")
) as { membresias: Membership[] };

const memberships: Membership[] = datos.membresias;

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

app.get("/memberships", (_req: Request, res: Response) => {
  res.status(200).json(memberships);
});

app.get("/memberships/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const membership = memberships.find((m) => m.id === id);

  if (!membership) {
    return res.status(404).json({ error: "Membresia no encontrada" });
  }

  return res.status(200).json(membership);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
