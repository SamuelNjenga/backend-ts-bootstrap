import { IncludeThroughOptions } from "sequelize/types";
import { Project } from "../db/models/project";
import { User } from "../db/models/user";
import { ProjectAssignment } from "./../db/models/projectassignment";

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

export const getProjectsByUserId = async (userId: string): Promise<User[]> => {
  try {
    const projects = await User.findAll({
      include: [
        {
          model: Project,
          through: {
            model: ProjectAssignment,
            where: {
              userId: userId,
            },
          } as IncludeThroughOptions,
        },
      ],
      where: {
        id: userId,
      },
    });

    return projects;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    throw error;
  }
};
