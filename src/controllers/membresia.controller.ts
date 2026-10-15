import { Request, Response } from 'express';
import {
  findAllMembresias,
  findMembresiaById,
  createMembresia,
  updateMembresia,
  deleteMembresia
} from '../services/membresia.service';

export function getMembresias(req: Request, res: Response) {
  const data = findAllMembresias();
  res.status(200).json(data);
}

export function getMembresia(req: Request, res: Response) {
  const id = Number(req.params.id);
  const item = findMembresiaById(id);
  if (!item) {
    return res.status(404).json({ error: 'Membresía no encontrada' });
  }
  res.status(200).json(item);
}

export function postMembresia(req: Request, res: Response) {
  const { nombre, precio } = req.body;
  if (!nombre || precio === undefined) {
    return res.status(400).json({ error: 'Nombre y precio son obligatorios' });
  }
  const newMembresia = createMembresia({ nombre, precio: Number(precio) });
  res.status(201).json(newMembresia);
}

export function putMembresia(req: Request, res: Response) {
  const id = Number(req.params.id);
  const updated = updateMembresia(id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Membresía no encontrada' });
  }
  res.status(200).json(updated);
}

export function removeMembresia(req: Request, res: Response) {
  const id = Number(req.params.id);
  const deleted = deleteMembresia(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Membresía no encontrada' });
  }
  res.status(204).send();
}