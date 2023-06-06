import { DataTypes as DT } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

const Role = connectionDb.define(
  "Role",
  {
    roleName: {
      type: DT.STRING,
      defaultValue: "user",
    },
  },
  {
    timestamps: false,
  }
);

export default Role;
