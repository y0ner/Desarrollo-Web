import { Application } from "express";
import { SaleController } from "../controllers/sale.controller";
import { authMiddleware } from "../middleware/auth";

export class SaleRoutes {
  public saleController: SaleController = new SaleController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/api/sales/public")
      .get(this.saleController.getAllSales)
      .post(this.saleController.createSale);

    app.route("/api/sales/public/:id")
      .get(this.saleController.getSaleById)
      .patch(this.saleController.updateSale)
      .delete(this.saleController.deleteSale);

    app.route("/api/sales/public/:id/logic")
      .delete(this.saleController.deleteSaleAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    app.route("/api/sales")
      .get(authMiddleware, this.saleController.getAllSales)
      .post(authMiddleware, this.saleController.createSale);

    app.route("/api/sales/:id")
      .get(authMiddleware, this.saleController.getSaleById)
      .patch(authMiddleware, this.saleController.updateSale)
      .delete(authMiddleware, this.saleController.deleteSale);

    app.route("/api/sales/:id/logic")
      .delete(authMiddleware, this.saleController.deleteSaleAdv);

    // ================== RUTAS LEGACY (mantener compatibilidad) ==================
    app.route("/ventas")
      .get(this.saleController.getAllSales)
      .post(this.saleController.createSale);

    app.route("/ventas/:id")
      .get(this.saleController.getSaleById)
      .patch(this.saleController.updateSale)
      .delete(this.saleController.deleteSale);

    app.route("/ventas/:id/logic")
      .delete(this.saleController.deleteSaleAdv);
  }
}