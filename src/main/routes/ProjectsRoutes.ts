import { Router } from "express";
import {
  createNewProject,
  deleteProjectRecord,
  getAllProjects,
  updateProjectRecord,
} from "../controllers/ProjectController";

const router: Router = Router();

router.post("/", createNewProject);
router.get("/", getAllProjects);
router.delete("/:id", deleteProjectRecord);
router.put("/:id", updateProjectRecord);

export const projectsRouter: Router = router;
