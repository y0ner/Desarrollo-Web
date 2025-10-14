import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { ProductSale } from "./ProductSale";

export interface SaleI {
  id?: number;
  sale_date: Date;
  subtotal: number;
  tax: number;
  discounts: number;
  total: number;
  status: "ACTIVE" | "INACTIVE";
  client_id: number;
}

export class Sale extends Model {
  public id!: number;
  public sale_date!: Date;
  public subtotal!: number;
  public tax!: number;
  public discounts!: number;
  public total!: number;
  public status!: "ACTIVE" | "INACTIVE";
  public client_id!: number;
}

Sale.init(
  {
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Sale date cannot be empty" },
        isDate: { args: true, msg: "Must be a valid date" },
      },
    },
    subtotal: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Subtotal cannot be empty" },
        isFloat: { msg: "Subtotal must be a valid number" },
      },
    },
    tax: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Tax cannot be empty" },
        isFloat: { msg: "Tax must be a valid number" },
      },
    },
    discounts: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Discounts cannot be empty" },
        isFloat: { msg: "Discounts must be a valid number" },
      },
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Total cannot be empty" },
        isFloat: { msg: "Total must be a valid number" },
      },
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "Sale",
    tableName: "sales",
    timestamps: false,
  }
);

Sale.hasMany(ProductSale, {
  foreignKey: "sale_id",
  sourceKey: "id",
});
ProductSale.belongsTo(Sale, {
  foreignKey: "sale_id",
  targetKey: "id",
});