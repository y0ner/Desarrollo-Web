import { Application } from "express";
import { ProductTypeController } from "../controllers/productType.controller";

export class ProductTypeRoutes {
  public productTypeController: ProductTypeController = new ProductTypeController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/product-types")
      .get(this.productTypeController.getAllProductTypes)
      .post(this.productTypeController.createProductType);

    app.route("/product-types/:id")
      .get(this.productTypeController.getProductTypeById)
      .patch(this.productTypeController.updateProductType)
      .delete(this.productTypeController.deleteProductType);

    app.route("/product-types/:id/logic")
      .delete(this.productTypeController.deleteProductTypeAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    // Si se requieren rutas protegidas, se pueden agregar aquí:


  }
}