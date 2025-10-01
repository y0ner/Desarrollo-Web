import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

export interface SaleI {
  id?: number;
  saleDate: Date;
  subtotal: number;
  tax: number;
  discounts: number;
  total: number;
  status: "ACTIVE" | "INACTIVE";
  client_id: number;
  sale_id: number;
}

export class Sale extends Model {
  public id!: number;
  public saleDate!: Date;
  public subtotal!: number;
  public tax!: number;
  public discounts!: number;
  public total!: number;
  public status!: "ACTIVE" | "INACTIVE";
  public client_id!: number;
  public sale_id!: number;
}

Sale.init(
  {
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Sale date cannot be empty" },
        isDate: { args: true, msg: "Must be a valid date" },
      },
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Subtotal cannot be empty" },
        isFloat: { msg: "Subtotal must be a valid number" },
      },
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Tax cannot be empty" },
        isFloat: { msg: "Tax must be a valid number" },
      },
    },
    discounts: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Discounts cannot be empty" },
        isFloat: { msg: "Discounts must be a valid number" },
      },
    },
    total: {
      type: DataTypes.FLOAT,
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