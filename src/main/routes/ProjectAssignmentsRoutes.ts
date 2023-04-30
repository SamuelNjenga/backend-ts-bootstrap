import { Router } from "express";
import {
  createNewProjectAssignment,
  deleteProjectAssignmentRecord,
  getAllProjectAssignments,
  updateProjectAssignmentRecord,
} from "../controllers/ProjectAssignmentController";

const router: Router = Router();

router.post("/", createNewProjectAssignment);
router.get("/", getAllProjectAssignments);
router.delete("/:id", deleteProjectAssignmentRecord);
router.put("/:id", updateProjectAssignmentRecord);

export const projectAssignmentsRouter: Router = router;
