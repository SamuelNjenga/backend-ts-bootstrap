import { sequelize } from "./database";

async function initializeDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await sequelize.sync(); // This will create the database tables if they don't exist
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default initializeDatabase;
