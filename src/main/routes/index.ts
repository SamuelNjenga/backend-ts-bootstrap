import { Router } from "express";

import { usersRouter } from "./UsersRoutes";
import { projectsRouter } from "./ProjectsRoutes";
import { projectAssignmentsRouter } from "./ProjectAssignmentsRoutes";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/projects", projectsRouter);
router.use("/projects/assignments", projectAssignmentsRouter);

export default router;
