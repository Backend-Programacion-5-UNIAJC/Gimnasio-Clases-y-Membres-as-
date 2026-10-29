import { prisma } from '../lib/prisma';

export const findMembresiaById = async (id: number) => {
  const result = await prisma.membresia.findUnique({ where: { id } });
  return result;
};
