import { Application } from "express";
import { SaleController } from "../controllers/sale.controller";

export class SaleRoutes {
  public saleController: SaleController = new SaleController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/ventas")
      .get(this.saleController.getAllSales)
      .post(this.saleController.createSale);

    app.route("/ventas/:id")
      .get(this.saleController.getSaleById)
      .patch(this.saleController.updateSale)
      .delete(this.saleController.deleteSale);

    app.route("/ventas/:id/logic")
      .delete(this.saleController.deleteSaleAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    // Si se requieren rutas protegidas, se pueden agregar aquí:


  }
}