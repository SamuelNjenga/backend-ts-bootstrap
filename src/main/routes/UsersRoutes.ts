import { Router } from "express";
import {
  createNewUser,
  deleteUserRecord,
  getAllUsers,
  updateUserRecord,
} from "../controllers/UserController";
import { getAllProjectsByUserId } from "./../controllers/ProjectController";

const router: Router = Router();

router.post("/", createNewUser);
router.get("/", getAllUsers);
router.get("/:userId/projects", getAllProjectsByUserId);
router.delete("/:id", deleteUserRecord);
router.put("/:id", updateUserRecord);

export const usersRouter: Router = router;
