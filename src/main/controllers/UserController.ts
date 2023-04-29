import { NextFunction, Request, Response } from "express";
import { sequelize } from "../db/config/database";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} from "../services/UserService";
import ReqValidator from "../utils/validator";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const valid = await ReqValidator.validate(req, res, {
      name: "required|string",
    });
    if (!valid) return;
    const data = {
      name: req.body.name,
    };
    await createUser(data, transaction);
    await transaction.commit();
    res.status(201).json({ data, message: `A new user has been created` });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Before");
    const users = await getUsers();
    console.log("Here");
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const updateUserRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const valid = await ReqValidator.validate(req, res, {
      name: "required|string",
    });
    if (!valid) return;
    const data = {
      name: req.body.name,
    };
    const userId = req.params.id;
    const user = await getUser(+userId);
    if (!user) {
      await transaction.commit();
      return res
        .status(404)
        .json({ message: `User ${userId} does not exist in our database` });
    }
    await updateUser(
      data,
      {
        where: {
          id: userId,
        },
      },
      transaction
    );
    await transaction.commit();
    res.status(200).json({ data, message: `User ${userId} has been updated` });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

export const deleteUserRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const userId = req.params.id;
    const user = await getUser(+userId);
    if (!user) {
      await transaction.commit();
      return res
        .status(404)
        .json({ message: `User ${userId} does not exist in our database` });
    }
    await deleteUser(
      {
        where: {
          id: userId,
        },
      },
      transaction
    );
    await transaction.commit();
    res.status(200).json({
      message: `User ${userId} has been deleted`,
    });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};
