"use strict";
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: { INTEGER: any }) => {
  class ProjectAssignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  ProjectAssignment.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      projectId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Projects",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ProjectAssignment",
    }
  );
  return ProjectAssignment;
};
