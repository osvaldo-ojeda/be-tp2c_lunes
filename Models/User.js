import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class User extends Model {}

User.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    apellido: {
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
      defaultValue:2 
    }
  },
  {
    sequelize: connectionDb,
    modelName: "User",
    timestamps: false,
  },
 
);

export default User;
