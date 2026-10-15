import { Request, Response } from "express";
import * as courseService from "../services/course.service";

export function getAllCourses(_req: Request, res: Response) {
  res.status(200).json(courseService.listCourses());
}

export function getCourseById(req: Request, res: Response) {
  const course = courseService.findCourseById(Number(req.params.id));
  if (!course) {
    return res.status(404).json({ error: "Clase no encontrada" });
  }
  return res.status(200).json(course);
}

export function createCourse(req: Request, res: Response) {
  const { title, instructor, schedule, capacity } = req.body ?? {};
  if (!title || !instructor || !schedule || !capacity) {
    return res.status(400).json({ error: "title, instructor, schedule y capacity son obligatorios" });
  }
  const course = courseService.createCourse({ title, instructor, schedule, capacity });
  return res.status(201).json(course);
}

export function updateCourse(req: Request, res: Response) {
  const { title, instructor, schedule, capacity } = req.body ?? {};
  const course = courseService.updateCourse(Number(req.params.id), { title, instructor, schedule, capacity });
  if (!course) {
    return res.status(404).json({ error: "Clase no encontrada" });
  }
  return res.status(200).json(course);
}

export function deleteCourse(req: Request, res: Response) {
  const deleted = courseService.deleteCourse(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ error: "Clase no encontrada" });
  }
  return res.status(204).send();
}
