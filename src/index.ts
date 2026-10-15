import express, { Request, Response } from "express";
import { readFileSync } from "fs";
import { join } from "path";
import courseRoutes from "./routes/course.routes";
import instructorRoutes from "./routes/instructor.routes";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

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

app.use("/courses", courseRoutes);

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

app.use("/instructors", instructorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
