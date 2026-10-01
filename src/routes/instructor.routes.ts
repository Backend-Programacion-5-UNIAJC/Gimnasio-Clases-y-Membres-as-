import { Router } from "express";
import { getAllInstructors, getInstructorById } from "../controllers/instructor.controller";

const router = Router();

router.get("/", getAllInstructors);
router.get("/:id", getInstructorById);

export default router;
