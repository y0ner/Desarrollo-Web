import { Application } from "express";
import { ProductController } from "../controllers/product.controller";

export class ProductRoutes {
  public productController: ProductController = new ProductController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/products")
      .get(this.productController.getAllProducts)
      .post(this.productController.createProduct);

    app.route("/products/:id")
      .get(this.productController.getProductById)
      .patch(this.productController.updateProduct)
      .delete(this.productController.deleteProduct);

    app.route("/products/:id/logic")
      .delete(this.productController.deleteProductAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    // Si se requieren rutas protegidas, se pueden agregar aquí:


  }
}