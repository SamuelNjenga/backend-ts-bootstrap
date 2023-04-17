import { DataTypes, QueryInterface } from "sequelize";

export async function up(
  queryInterface: QueryInterface,
  Sequelize: any
): Promise<void> {
  await queryInterface.createTable("Users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
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
  Sequelize: typeof import("sequelize").Sequelize
): Promise<void> {
  await queryInterface.dropTable("Users");
}
