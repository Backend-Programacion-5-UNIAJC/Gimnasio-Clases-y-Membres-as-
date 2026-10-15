export interface Membresia {
  id: number;
  nombre: string;
  precio: number;
}

export const membresias: Membresia[] = [
  { id: 1, nombre: 'Mensual Básico', precio: 80000 },
  { id: 2, nombre: 'Trimestral VIP', precio: 210000 },
  { id: 3, nombre: 'Anual Premium', precio: 750000 }
];