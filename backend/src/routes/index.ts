import { Router } from "express";
import { ClientRoutes } from "./client";
import { SaleRoutes } from "./sale";
import { ProductRoutes } from "./product";
import { ProductTypeRoutes } from "./productType";
import { ProductSaleRoutes } from "./productSale";
import { UserRoutes } from "./authorization/user";
import { RoleRoutes } from "./authorization/role";
import { RoleUserRoutes } from "./authorization/role_user";
import { RefreshTokenRoutes } from "./authorization/refresh_token";
import { ResourceRoutes } from "./authorization/resource"; // Import ResourceRoutes
import { ResourceRoleRoutes } from "./authorization/resourceRole"; // Import ResourceRoleRoutes
import { AuthRoutes } from "./authorization/auth"; // Add this import

export class Routes {
    public clientRoutes: ClientRoutes = new ClientRoutes();
    public saleRoutes: SaleRoutes = new SaleRoutes();
    public productRoutes: ProductRoutes = new ProductRoutes();
    public productTypeRoutes: ProductTypeRoutes = new ProductTypeRoutes();
    public productSaleRoutes: ProductSaleRoutes = new ProductSaleRoutes();
    public userRoutes: UserRoutes = new UserRoutes();
    public roleRoutes: RoleRoutes = new RoleRoutes();
    public roleUserRoutes: RoleUserRoutes = new RoleUserRoutes();
    public refreshTokenRoutes: RefreshTokenRoutes = new RefreshTokenRoutes();
    public resourceRoutes: ResourceRoutes = new ResourceRoutes(); // Add ResourceRoutes
    public resourceRoleRoutes: ResourceRoleRoutes = new ResourceRoleRoutes(); // Add ResourceRoutes
    public authRoutes: AuthRoutes = new AuthRoutes(); // Add this line

}