import { DataTypes, QueryInterface } from "sequelize";

export async function up(
  queryInterface: QueryInterface,
  Sequelize: any
): Promise<void> {
  await queryInterface.createTable("Projects", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
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
  DataTypes: any
): Promise<void> {
  await queryInterface.dropTable("Projects");
}
