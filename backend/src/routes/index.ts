import { Router } from "express";
import { ClientRoutes } from "./client";
import { SaleRoutes } from "./sale";

export class Routes {
  public clientRoutes: ClientRoutes = new ClientRoutes();
  public saleRoutes: SaleRoutes = new SaleRoutes();

}