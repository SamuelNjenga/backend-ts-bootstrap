import { NextFunction, Request, Response } from "express";
import { sequelize } from "../db/config/database";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject
} from "../services/ProjectService";
import ReqValidator from "../utils/validator";

export const createNewProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const valid = await ReqValidator.validate(req, res, {
      title: "required|string",
    });
    if (!valid) return;
    const data = {
      title: req.body.title,
    };
    await createProject(data, transaction);
    await transaction.commit();
    res.status(201).json({ data, message: `A new project has been created` });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};

export const updateProjectRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const valid = await ReqValidator.validate(req, res, {
      title: "required|string",
    });
    if (!valid) return;
    const data = {
      title: req.body.title,
    };
    const projectId = req.params.id;
    const project = await getProject(+projectId);
    if (!project) {
      await transaction.commit();
      return res.status(404).json({
        message: `Project ${projectId} does not exist in our database`,
      });
    }
    await updateProject(
      data,
      {
        where: {
          id: projectId,
        },
      },
      transaction
    );
    await transaction.commit();
    res
      .status(200)
      .json({ data, message: `Project ${projectId} has been updated` });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

export const deleteProjectRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transaction = await sequelize.transaction();
  try {
    const projectId = req.params.id;
    const project = await getProject(+projectId);
    if (!project) {
      await transaction.commit();
      return res.status(404).json({
        message: `Project ${projectId} does not exist in our database`,
      });
    }
    await deleteProject(
      {
        where: {
          id: projectId,
        },
      },
      transaction
    );
    await transaction.commit();
    res.status(200).json({
      message: `Project ${projectId} has been deleted`,
    });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};
