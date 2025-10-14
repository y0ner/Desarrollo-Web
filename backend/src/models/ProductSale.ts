import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export interface ProductSaleI {
  id?: number;
  total: number;
  product_id: number;
  sale_id: number;
}

export class ProductSale extends Model {
  public id!: number;
  public total!: number;
  public product_id!: number;
  public sale_id!: number;
}

ProductSale.init(
  {
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name cannot be empty" },
      },
    },
  },
  {
    sequelize,
    modelName: "ProductSale",
    tableName: "product_sales",
    timestamps: false,
  }
);