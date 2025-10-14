import { Request, Response } from "express";
import { ProductType, ProductTypeI } from "../models/ProductType";

export class ProductTypeController {
  // Get all product types
  public async getAllProductTypes(req: Request, res: Response) {
    try {
      const productTypes: ProductTypeI[] = await ProductType.findAll({
        where: { status: true },
      });
      res.status(200).json({ productTypes });
    } catch (error) {
      res.status(500).json({ error: "Error fetching product types" });
    }
  }

  // Get a product type by ID
  public async getProductTypeById(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const productType = await ProductType.findOne({
        where: { id: pk, status: true },
      });
      if (productType) {
        res.status(200).json(productType);
      } else {
        res.status(404).json({ error: "Product type not found or inactive" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching product type" });
    }
  }

  // Create a new product type
  public async createProductType(req: Request, res: Response) {
    const { name, description, status } = req.body;
    try {
      let body: ProductTypeI = {
        name,
        description,
        status,
      };

      const newProductType = await ProductType.create({ ...body });
      res.status(201).json(newProductType);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a product type
  public async updateProductType(req: Request, res: Response) {
    const { id: pk } = req.params;
    const { name, description, status } = req.body;
    try {
      let body: ProductTypeI = {
        name,
        description,
        status,
      };

      const productTypeExist = await ProductType.findOne({
        where: { id: pk, status: true },
      });

      if (productTypeExist) {
        await productTypeExist.update(body, {
          where: { id: pk },
        });
        res.status(200).json(productTypeExist);
      } else {
        res.status(404).json({ error: "Product type not found or inactive" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a product type physically
  public async deleteProductType(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const productTypeToDelete = await ProductType.findByPk(id);

      if (productTypeToDelete) {
        await productTypeToDelete.destroy();
        res.status(200).json({ message: "Product type deleted successfully" });
      } else {
        res.status(404).json({ error: "Product type not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting product type" });
    }
  }

  // Delete a product type logically (change status to false)
  public async deleteProductTypeAdv(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const productTypeToUpdate = await ProductType.findOne({
        where: { id: pk, status: true },
      });

      if (productTypeToUpdate) {
        await productTypeToUpdate.update({ status: false });
        res.status(200).json({ message: "Product type marked as inactive" });
      } else {
        res.status(404).json({ error: "Product type not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error marking product type as inactive" });
    }
  }
}