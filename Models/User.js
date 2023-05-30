import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class User extends Model {}

User.init(
  {
    userName: {
      type: DT.STRING,
      allowNull: false,
    },
    userLastName: {
      type: DT.STRING(50),
      allowNull: false,
    },
    password: {
      type: DT.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName: "User",
  }
);

export default User;
