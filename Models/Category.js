import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Category extends Model {}

Category.init(
  {
    categoryName: {
      type: DT.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName:"Category"
  }
);

export default Category;
