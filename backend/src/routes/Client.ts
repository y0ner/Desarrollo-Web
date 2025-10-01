import { Router, Application } from "express";
import { ClientController } from "../controllers/client.controller";

export class ClientRoutes {
  public clientController: ClientController = new ClientController();

  public routes(app: Application): void {
    app.route("/clientes").get(this.clientController.getAllClients);
    app.route("/clientes/:id").get(this.clientController.getClientById);  

  }
}