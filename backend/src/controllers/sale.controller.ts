import { Request, Response } from "express";
import { Sale, SaleI } from "../models/Sale";

export class SaleController {
  // Get all sales with status "ACTIVE"
  public async getAllSales(req: Request, res: Response) {
    try {
      const sales: SaleI[] = await Sale.findAll({
        where: { status: "ACTIVE" },
      });
      res.status(200).json({ sales });
    } catch (error) {
      res.status(500).json({ error: "Error fetching sales" });
    }
  }

  // Get a sale by ID
  public async getSaleById(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const sale = await Sale.findOne({
        where: { 
          id: pk, 
          status: "ACTIVE" },
      });
      if (sale) {
        res.status(200).json(sale);
      } else {
        res.status(404).json({ error: "Sale not found or inactive" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching sale" });
    }
  }

  // Create a new sale
  public async createSale(req: Request, res: Response) {
    const { id, sale_date, subtotal, tax, discounts, total, status, client_id } = req.body;
    try {
      let body: SaleI = {
        sale_date,
        subtotal,
        tax,
        discounts,
        total,
        status,
        client_id,
      };
      console.log(body)
      const newSale = await Sale.create({ ...body });
      res.status(201).json(newSale);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a sale
  public async updateSale(req: Request, res: Response) {
    const { id: pk } = req.params;
    const { id, sale_date, subtotal, tax, discounts, total, status, client_id } = req.body;
    try {
      let body: SaleI = {
        sale_date,
        subtotal,
        tax,
        discounts,
        total,
        status,
        client_id,

      };

      const saleExist = await Sale.findOne({
        where: { 
          id: pk, 
          status: "ACTIVE" },
      });

      if (saleExist) {
        await saleExist.update(body, {
          where: { id: pk },
        });
        res.status(200).json(saleExist);
      } else {
        res.status(404).json({ error: "Sale not found or inactive" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a sale physically
  public async deleteSale(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const saleToDelete = await Sale.findByPk(id);

      if (saleToDelete) {
        await saleToDelete.destroy();
        res.status(200).json({ message: "Sale deleted successfully" });
      } else {
        res.status(404).json({ error: "Sale not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting sale" });
    }
  }

  // Delete a sale logically (change status to "INACTIVE")
  public async deleteSaleAdv(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const saleToUpdate = await Sale.findOne({
        where: { 
          id: pk, 
          status: "ACTIVE" },
      });

      if (saleToUpdate) {
        await saleToUpdate.update({ status: "INACTIVE" });
        res.status(200).json({ message: "Sale marked as inactive" });
      } else {
        res.status(404).json({ error: "Sale not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error marking sale as inactive" });
    }
  }
}