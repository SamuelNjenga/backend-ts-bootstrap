import { ProjectAssignment } from "../db/models/projectassignment";

export const createProjectAssignment = async (
  data: any,
  optionA: any
): Promise<ProjectAssignment | void> => {
  return ProjectAssignment.create(data, optionA);
};

export const updateProjectAssignment = async (
  data: any,
  options: any,
  transaction: any
) => {
  try {
    const result = await ProjectAssignment.update(data, {
      ...options,
      transaction,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

export const getProjectAssignments = async (): Promise<ProjectAssignment[]> => {
  return ProjectAssignment.findAll();
};

export const getProjectAssignment = async (
  id: number
): Promise<ProjectAssignment | null> => {
  return ProjectAssignment.findByPk(id);
};

export const deleteProjectAssignment = async (options: any, transaction: any) => {
  try {
    const result = await ProjectAssignment.destroy({
      ...options,
      transaction,
    });
    return result;
  } catch (err) {
    throw err;
  }
};
