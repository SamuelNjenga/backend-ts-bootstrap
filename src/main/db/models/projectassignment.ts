import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Project } from "./project";
import { User } from "./user";

@Table({ tableName: "projectAssignments" })
export class ProjectAssignment extends Model<ProjectAssignment> {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER) // Specify the data type as INTEGER
  userId!: number;

  @ForeignKey(() => Project)
  @Column(DataType.INTEGER)
  projectId!: number;
}
