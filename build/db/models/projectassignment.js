"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ProjectAssignment extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProjectAssignment.init({
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
    }, {
        sequelize,
        modelName: "ProjectAssignment",
    });
    return ProjectAssignment;
};
