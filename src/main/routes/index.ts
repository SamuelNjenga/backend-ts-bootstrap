import { Router } from "express";

import { usersRouter } from "./UsersRoutes";
import { projectsRouter } from "./ProjectsRoutes";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/projects", projectsRouter);

export default router;
