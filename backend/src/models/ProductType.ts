import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { Product } from "./Product";

export interface ProductTypeI {
  id?: number;
  name: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
}

export class ProductType extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public status!: "ACTIVE" | "INACTIVE";
}

ProductType.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name cannot be empty" },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description cannot be empty" },
      },
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "ProductType",
    tableName: "product_types",
    timestamps: false,
  }
);

ProductType.hasMany(Product, {
  foreignKey: "product_type_id",
  sourceKey: "id",
});
Product.belongsTo(ProductType, {
  foreignKey: "product_type_id",
  targetKey: "id",
});