import { Router } from "express";

import { usersRouter } from "./UsersRoutes";

const router: Router = Router();

router.use("/users", usersRouter);

export default router;
