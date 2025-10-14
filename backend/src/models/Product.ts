import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { ProductSale } from "./ProductSale";


export interface ProductI {
  id?: number;
  name: string;
  brand: string;
  price: number;
  min_stock: number;
  quantity: number;
  product_type_id: number;
  status: "ACTIVE" | "INACTIVE";
}

export class Product extends Model {
  public id!: number;
  public name!: string;
  public brand!: string;
  public price!: number;
  public min_stock!: number;
  public quantity!: number;
  public product_type_id!: number;
  public status!: "ACTIVE" | "INACTIVE";
}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name cannot be empty" },
      },
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Brand cannot be empty" },
      },
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Price cannot be empty" },
        isFloat: { msg: "Price must be a valid number" },
      },
    },
    min_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Minimum stock cannot be empty" },
        isInt: { msg: "Minimum stock must be an integer" },
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Quantity cannot be empty" },
        isInt: { msg: "Quantity must be an integer" },
      },
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: false,
  }
);

Product.hasMany(ProductSale, {
  foreignKey: "product_id",
  sourceKey: "id",
});
ProductSale.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "id",
});
