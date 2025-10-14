import { Request, Response } from "express";
import { Product, ProductI } from "../models/Product";

export class ProductController {
  // Get all products with status "ACTIVE"
  public async getAllProducts(req: Request, res: Response) {
    try {
      const products: ProductI[] = await Product.findAll({
        where: { status: "ACTIVE" },
      });
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ error: "Error fetching products" });
    }
  }

  // Get a product by ID
  public async getProductById(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const product = await Product.findOne({
        where: { id: pk, status: "ACTIVE" },
      });
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "Product not found or inactive" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching product" });
    }
  }

  // Create a new product
  public async createProduct(req: Request, res: Response) {
    const { id, name, brand, price, min_stock, quantity, product_type_id,status } = req.body;
    try {
      let body: ProductI = {
        name,
        brand,
        price,
        min_stock,
        quantity,
        product_type_id,
        status,
      };

      const newProduct = await Product.create({ ...body });
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a product
  public async updateProduct(req: Request, res: Response) {
    const { id: pk } = req.params;
    const { id,name, brand, price, min_stock, quantity, product_type_id, status } = req.body;
    try {
      let body: ProductI = {
        name,
        brand,
        price,
        min_stock,
        quantity,
        product_type_id,
        status,
      };

      const productExist = await Product.findOne({
        where: { id: pk, status: "ACTIVE" },
      });

      if (productExist) {
        await productExist.update(body, {
          where: { id: pk },
        });
        res.status(200).json(productExist);
      } else {
        res.status(404).json({ error: "Product not found or inactive" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a product physically
  public async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const productToDelete = await Product.findByPk(id);

      if (productToDelete) {
        await productToDelete.destroy();
        res.status(200).json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting product" });
    }
  }

  // Delete a product logically (change status to "INACTIVE")
  public async deleteProductAdv(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const productToUpdate = await Product.findOne({
        where: { id: pk, status: "ACTIVE" },
      });

      if (productToUpdate) {
        await productToUpdate.update({ status: "INACTIVE" });
        res.status(200).json({ message: "Product marked as inactive" });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error marking product as inactive" });
    }
  }
}