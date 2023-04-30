import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Project } from "../models/project";
import { User } from "../models/user";
import { ProjectAssignment } from "./../models/projectassignment";

dotenv.config(); // Load environment variables from .env file

const databaseName: string | undefined = process.env.DB_DATABASE;
const username: string | undefined = process.env.DB_USERNAME;
const password: string | undefined = process.env.DB_PASSWORD;

if (!databaseName || !username) {
  throw new Error("Database configuration missing");
}

export const sequelize = new Sequelize(databaseName, username, password, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: true, // Set to true if you want to see SQL queries in the console
  models: [User, Project, ProjectAssignment],
});
