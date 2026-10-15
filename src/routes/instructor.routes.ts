import { Router } from "express";
import {
  getAllInstructors,
  getInstructorById,
  createInstructor,
  updateInstructor,
  deleteInstructor
} from "../controllers/instructor.controller";

const router = Router();

router.get("/", getAllInstructors);
router.get("/:id", getInstructorById);
router.post("/", createInstructor);
router.put("/:id", updateInstructor);
router.delete("/:id", deleteInstructor);

export default router;
