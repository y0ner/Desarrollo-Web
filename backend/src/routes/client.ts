import { Router, Application } from "express";
import { ClientController } from "../controllers/client.controller";
import { authMiddleware } from "../middleware/auth";

export class ClientRoutes {
  public clientController: ClientController = new ClientController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN ==================
    app.route("/api/clientes/public")
      .get(this.clientController.getAllClients)
      .post(this.clientController.createClient);

    app.route("/api/clientes/public/:id")
      .get(this.clientController.getClientById)
      .patch(this.clientController.updateClient)
      .delete(this.clientController.deleteClient);

    app.route("/api/clientes/public/:id/logic")
      .delete(this.clientController.deleteClientAdv);

    // ================== RUTAS CON AUTENTICACIÓN ==================
    app.route("/api/clientes")
      .get(authMiddleware, this.clientController.getAllClients)
      .post(authMiddleware, this.clientController.createClient);

    app.route("/api/clientes/:id")
      .get(authMiddleware, this.clientController.getClientById)
      .patch(authMiddleware, this.clientController.updateClient)
      .delete(authMiddleware, this.clientController.deleteClient);

    app.route("/api/clientes/:id/logic")
      .delete(authMiddleware, this.clientController.deleteClientAdv);
  }
}