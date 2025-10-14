import { Application } from "express";
import { ProductTypeController } from "../controllers/productType.controller";
import { authMiddleware } from "../middleware/auth";

export class ProductTypeRoutes {
  public productTypeController: ProductTypeController = new ProductTypeController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/api/product-types/public")
      .get(this.productTypeController.getAllProductTypes)
      .post(this.productTypeController.createProductType);

    app.route("/api/product-types/public/:id")
      .get(this.productTypeController.getProductTypeById)
      .patch(this.productTypeController.updateProductType)
      .delete(this.productTypeController.deleteProductType);

    app.route("/api/product-types/public/:id/logic")
      .delete(this.productTypeController.deleteProductTypeAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    app.route("/api/product-types")
      .get(authMiddleware, this.productTypeController.getAllProductTypes)
      .post(authMiddleware, this.productTypeController.createProductType);

    app.route("/api/product-types/:id")
      .get(authMiddleware, this.productTypeController.getProductTypeById)
      .patch(authMiddleware, this.productTypeController.updateProductType)
      .delete(authMiddleware, this.productTypeController.deleteProductType);

    app.route("/api/product-types/:id/logic")
      .delete(authMiddleware, this.productTypeController.deleteProductTypeAdv);
  }
}