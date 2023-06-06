import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class User extends Model {}

User.init(
  {
    userName: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    userLastName: {
      type: DT.STRING(50),
      allowNull: false,
    },
    password: {
      type: DT.STRING(50),
      allowNull: false,
    },
    email: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    roleId:{
      type:DT.INTEGER, 
    }
  },
  {
    sequelize: connectionDb,
    modelName: "User",
    timestamps: false,
  },
 
);

export default User;
