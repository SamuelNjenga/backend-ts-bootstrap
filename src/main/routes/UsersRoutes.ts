import { Router } from "express";
import {
  createNewUser,
  deleteUserRecord,
  getAllUsers,
  updateUserRecord,
} from "../controllers/UserController";

const router: Router = Router();

router.post("/", createNewUser);
router.get("/", getAllUsers);
router.delete("/:id", deleteUserRecord);
router.put("/:id", updateUserRecord);

export const usersRouter: Router = router;
