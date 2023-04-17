import { DataTypes, QueryInterface } from "sequelize";

export async function up(
  queryInterface: QueryInterface,
  Sequelize: any
): Promise<void> {
  await queryInterface.createTable("ProjectAssignments", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: any
): Promise<void> {
  await queryInterface.dropTable("ProjectAssignments");
}
