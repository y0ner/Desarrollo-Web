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


}