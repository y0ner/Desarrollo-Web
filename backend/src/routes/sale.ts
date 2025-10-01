import { Application } from "express";
import { SaleController } from "../controllers/sale.controller";

export class SaleRoutes {
  public saleController: SaleController = new SaleController();

  public routes(app: Application): void {
    app.route("/ventas").get(this.saleController.getAllSales); // Get all sales
    app.route("/ventas/:id").get(this.saleController.getSaleById); // Get a sale by ID

  }
}