import { Request, Response } from "express";
import { ProductSale, ProductSaleI } from "../models/ProductSale";

export class ProductSaleController {
  // Get all product sales
  public async getAllProductSales(req: Request, res: Response) {
    try {
      const productSales: ProductSaleI[] = await ProductSale.findAll({
        where: { status: true },
      });
      res.status(200).json({ productSales });
    } catch (error) {
      res.status(500).json({ error: "Error fetching product sales" });
    }
  }

  // Get a product sale by ID
  public async getProductSaleById(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const productSale = await ProductSale.findOne({
        where: { id: pk, status: true },
      });
      if (productSale) {
        res.status(200).json(productSale);
      } else {
        res.status(404).json({ error: "Product sale not found or inactive" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching product sale" });
    }
  }

  // Create a new product sale
  public async createProductSale(req: Request, res: Response) {
    const { total, sale_id, product_id } = req.body;
    try {
      let body: ProductSaleI = {
        total,
        sale_id,
        product_id,
      };

      const newProductSale = await ProductSale.create({ ...body });
      res.status(201).json(newProductSale);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a product sale
  public async updateProductSale(req: Request, res: Response) {
    const { id: pk } = req.params;
    const { total, sale_id, product_id } = req.body;
    try {
      let body: ProductSaleI = {
        total,
        sale_id,
        product_id,
      };

      const productSaleExist = await ProductSale.findOne({
        where: { id: pk, status: true },
      });

      if (productSaleExist) {
        await productSaleExist.update(body, {
          where: { id: pk },
        });
        res.status(200).json(productSaleExist);
      } else {
        res.status(404).json({ error: "Product sale not found or inactive" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a product sale physically
  public async deleteProductSale(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const productSaleToDelete = await ProductSale.findByPk(id);

      if (productSaleToDelete) {
        await productSaleToDelete.destroy();
        res.status(200).json({ message: "Product sale deleted successfully" });
      } else {
        res.status(404).json({ error: "Product sale not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting product sale" });
    }
  }

  // Delete a product sale logically (change status to false)
  public async deleteProductSaleAdv(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const productSaleToUpdate = await ProductSale.findOne({
        where: { id: pk, status: true },
      });

      if (productSaleToUpdate) {
        await productSaleToUpdate.update({ status: false });
        res.status(200).json({ message: "Product sale marked as inactive" });
      } else {
        res.status(404).json({ error: "Product sale not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error marking product sale as inactive" });
    }
  }
}