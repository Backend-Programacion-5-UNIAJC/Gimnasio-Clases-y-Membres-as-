import { Request, Response } from "express";
import * as instructorService from "../services/instructor.service";

export function getAllInstructors(_req: Request, res: Response) {
  res.status(200).json(instructorService.listInstructors());
}

export function getInstructorById(req: Request, res: Response) {
  const instructor = instructorService.findInstructorById(Number(req.params.id));
  if (!instructor) {
    return res.status(404).json({ error: "Instructor no encontrado" });
  }
  return res.status(200).json(instructor);
}

export function createInstructor(req: Request, res: Response) {
  const { name, email } = req.body ?? {};
  if (!name || !email) {
    return res.status(400).json({ error: "name y email son obligatorios" });
  }
  const instructor = instructorService.createInstructor({ name, email });
  return res.status(201).json(instructor);
}

export function updateInstructor(req: Request, res: Response) {
  const { name, email } = req.body ?? {};
  const instructor = instructorService.updateInstructor(Number(req.params.id), { name, email });
  if (!instructor) {
    return res.status(404).json({ error: "Instructor no encontrado" });
  }
  return res.status(200).json(instructor);
}

export function deleteInstructor(req: Request, res: Response) {
  const deleted = instructorService.deleteInstructor(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ error: "Instructor no encontrado" });
  }
  return res.status(204).send();
}
