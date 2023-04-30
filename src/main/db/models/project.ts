// src/models/User.ts
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "projects" })
export class Project extends Model<Project> {
  @Column({ type: DataType.STRING })
  title!: string;
}
