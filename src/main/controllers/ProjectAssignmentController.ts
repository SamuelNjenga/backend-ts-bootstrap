import { NextFunction, Request, Response } from "express";
import { sequelize } from "../db/config/database";
import {
  createProjectAssignment,
  deleteProjectAssignment,
  getProjectAssignment,
  getProjectAssignments,
  updateProjectAssignment,
} from "../services/ProjectAssignmentService";
import ReqValidator from "../utils/validator";

export const createNewProjectAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const valid = await ReqValidator.validate(req, res, {
      userId: "required|integer",
      projectId: "required|integer",
    });
    if (!valid) return;
    const data = {
      userId: req.body.userId,
      projectId: req.body.projectId,
    };
    await createProjectAssignment(data, transaction);
    await transaction.commit();
    res
      .status(201)
      .json({ data, message: `A new projectAssignment has been created` });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

export const getAllProjectAssignments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projectAssignments = await getProjectAssignments();
    res.status(200).json(projectAssignments);
  } catch (err) {
    next(err);
  }
};

export const updateProjectAssignmentRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const valid = await ReqValidator.validate(req, res, {
      userId: "integer",
      projectId: "integer",
    });
    if (!valid) return;
    const data = {
      userId: req.body.userId,
      projectId: req.body.projectId,
    };
    const projectAssignmentId = req.params.id;
    const projectAssignment = await getProjectAssignment(+projectAssignmentId);
    if (!projectAssignment) {
      await transaction.commit();
      return res.status(404).json({
        message: `ProjectAssignment ${projectAssignmentId} does not exist in our database`,
      });
    }
    await updateProjectAssignment(
      data,
      {
        where: {
          id: projectAssignmentId,
        },
      },
      transaction
    );
    await transaction.commit();
    res.status(200).json({
      data,
      message: `ProjectAssignment ${projectAssignmentId} has been updated`,
    });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

export const deleteProjectAssignmentRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const projectAssignmentId = req.params.id;
    const projectAssignment = await getProjectAssignment(+projectAssignmentId);
    if (!projectAssignment) {
      await transaction.commit();
      return res.status(404).json({
        message: `ProjectAssigment ${projectAssignmentId} does not exist in our database`,
      });
    }
    await deleteProjectAssignment(
      {
        where: {
          id: projectAssignmentId,
        },
      },
      transaction
    );
    await transaction.commit();
    res.status(200).json({
      message: `ProjectAssignment ${projectAssignmentId} has been deleted`,
    });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};
