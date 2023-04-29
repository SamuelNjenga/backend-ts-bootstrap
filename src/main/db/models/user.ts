// src/models/User.ts
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column({ type: DataType.STRING })
  name!: string;
}
