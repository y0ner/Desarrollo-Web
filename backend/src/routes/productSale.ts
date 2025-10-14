import { Application } from "express";
import { ProductSaleController } from "../controllers/productSale.controller";
import { authMiddleware } from "../middleware/auth";

export class ProductSaleRoutes {
  public productSaleController: ProductSaleController = new ProductSaleController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/api/product-sales/public")
      .get(this.productSaleController.getAllProductSales)
      .post(this.productSaleController.createProductSale);

    app.route("/api/product-sales/public/:id")
      .get(this.productSaleController.getProductSaleById)
      .patch(this.productSaleController.updateProductSale)
      .delete(this.productSaleController.deleteProductSale);

    app.route("/api/product-sales/public/:id/logic")
      .delete(this.productSaleController.deleteProductSaleAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    app.route("/api/product-sales")
      .get(authMiddleware, this.productSaleController.getAllProductSales)
      .post(authMiddleware, this.productSaleController.createProductSale);

    app.route("/api/product-sales/:id")
      .get(authMiddleware, this.productSaleController.getProductSaleById)
      .patch(authMiddleware, this.productSaleController.updateProductSale)
      .delete(authMiddleware, this.productSaleController.deleteProductSale);

    app.route("/api/product-sales/:id/logic")
      .delete(authMiddleware, this.productSaleController.deleteProductSaleAdv);

    // ================== RUTAS LEGACY (mantener compatibilidad) ==================
    app.route("/product-sales")
      .get(this.productSaleController.getAllProductSales)
      .post(this.productSaleController.createProductSale);

    app.route("/product-sales/:id")
      .get(this.productSaleController.getProductSaleById)
      .patch(this.productSaleController.updateProductSale)
      .delete(this.productSaleController.deleteProductSale);

    app.route("/product-sales/:id/logic")
      .delete(this.productSaleController.deleteProductSaleAdv);
  }
}