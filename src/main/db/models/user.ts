// src/models/User.ts
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Project } from "./project";
import { ProjectAssignment } from "./projectassignment";

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column({ type: DataType.STRING })
  name!: string;

  @BelongsToMany(() => Project, () => ProjectAssignment)
  projects!: Project[];
}
