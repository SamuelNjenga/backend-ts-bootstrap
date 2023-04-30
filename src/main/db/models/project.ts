// src/models/User.ts
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "./user";
import { ProjectAssignment } from './projectassignment';

@Table({ tableName: "projects" })
export class Project extends Model<Project> {
  @Column({ type: DataType.STRING })
  title!: string;

  @BelongsToMany(() => User, () => ProjectAssignment)
  users!: User[];
}
