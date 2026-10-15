import { Router } from 'express';
import {
  getMembresias,
  getMembresia,
  postMembresia,
  putMembresia,
  removeMembresia
} from '../controllers/membresia.controller';

const router = Router();

router.get('/', getMembresias);
router.get('/:id', getMembresia);
router.post('/', postMembresia);
router.put('/:id', putMembresia);
router.delete('/:id', removeMembresia);

export default router;