import { Request, Response } from "express";
import { courses } from "../data/courses";

export const getAllCourses = (_req: Request, res: Response) => {
  res.status(200).json(courses);
};

export const getCourseById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ error: "Clase no encontrada" });
  }

  return res.status(200).json(course);
};
