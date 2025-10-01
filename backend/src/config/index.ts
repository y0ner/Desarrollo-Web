import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import sequelize from "../database/connection";
import { Routes } from "../routes/index";
var cors = require("cors"); // install en node y types

// Load environment variables from the .env file
dotenv.config();

export class App {
  public app: Application;
  public routePrv: Routes = new Routes();

  constructor(private port?: number | string) {
    this.app = express();

    this.settings();
    this.middlewares();
    this.routes();
    this.dbConnection(); // Call the database connection method
  }

  // Application settings
  private settings(): void {
    this.app.set('port', this.port || process.env.PORT || 4000);
  }

  // Middleware configuration
  private middlewares(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  // Route configuration
  private routes(): void {
    this.routePrv.clientRoutes.routes(this.app);
    this.routePrv.saleRoutes.routes(this.app);
    // this.routePrv.productRoutes.routes(this.app); // Add Product routes
    // this.routePrv.productTypeRoutes.routes(this.app); // Add ProductType routes
    // this.routePrv.productSaleRoutes.routes(this.app); // Add ProductSale routes

    // this.routePrv.userRoutes.routes(this.app);
    // this.routePrv.roleRoutes.routes(this.app);
    // this.routePrv.roleUserRoutes.routes(this.app);
    // this.routePrv.authRoutes.routes(this.app);
    // this.routePrv.refreshTokenRoutes.routes(this.app);
    // this.routePrv.resourceRoutes.routes(this.app); // Add Resource routes
    // this.routePrv.resourceRoleRoutes.routes(this.app); // Add ResourceRole routes

    // CUANDO SE CREE LOS DEMAS MODULOS, PRDUCT, USER, ROLE, AUTH, REFRESHTOKEN, RESOURCE, ROLE-RESOURCE, ROLE-USER
    // SE DEBE DESCOMENTAR ESTO!!!
  }

  // Method to connect and synchronize the database
  private async dbConnection(): Promise<void> {
    try {
      await sequelize.sync({ force: false }); // Synchronize the database
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  // Start the server
  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}