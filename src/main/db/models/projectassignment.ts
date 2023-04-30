import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";
import { Project } from "./project";
import { User } from "./user";

@Table({ tableName: "projectAssignments" })
export class ProjectAssignment extends Model<ProjectAssignment> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER) // Specify the data type as INTEGER
  userId!: number;

  @ForeignKey(() => Project)
  @Column(DataType.INTEGER)
  projectId!: number;
}
