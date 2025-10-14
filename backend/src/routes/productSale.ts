import { Application } from "express";
import { ProductSaleController } from "../controllers/productSale.controller";

export class ProductSaleRoutes {
  public productSaleController: ProductSaleController = new ProductSaleController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/product-sales")
      .get(this.productSaleController.getAllProductSales)
      .post(this.productSaleController.createProductSale);

    app.route("/product-sales/:id")
      .get(this.productSaleController.getProductSaleById)
      .patch(this.productSaleController.updateProductSale)
      .delete(this.productSaleController.deleteProductSale);

    app.route("/product-sales/:id/logic")
      .delete(this.productSaleController.deleteProductSaleAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    // Si se requieren rutas protegidas, se pueden agregar aquí:


  }
}