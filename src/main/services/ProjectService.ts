import { Project } from "../db/models/project";

export const createProject = async (
  data: any,
  optionA: any
): Promise<Project | void> => {
  return Project.create(data, optionA);
};

export const updateProject = async (
  data: any,
  options: any,
  transaction: any
) => {
  try {
    const result = await Project.update(data, {
      ...options,
      transaction,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

export const getProjects = async (): Promise<Project[]> => {
  return Project.findAll();
};

export const getProject = async (id: number): Promise<Project | null> => {
  return Project.findByPk(id);
};

export const deleteProject = async (options: any, transaction: any) => {
  try {
    const result = await Project.destroy({
      ...options,
      transaction,
    });
    return result;
  } catch (err) {
    throw err;
  }
};
