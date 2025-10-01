import { Request, Response } from "express";
import { Client, ClientI } from "../models/Client";

export class ClientController {
  // Get all clients with status "ACTIVE"
  public async getAllClients(req: Request, res: Response) {
    try {
      const clients: ClientI[] = await Client.findAll({
        where: { status: 'ACTIVE' },
      });
      res.status(200).json({ clients });
    } catch (error) {
      res.status(500).json({ error: "Error fetching clients" });
    }
  }

  // Get a client by ID
  public async getClientById(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const client = await Client.findOne({
        where: { 
          id: pk, 
          status: 'ACTIVE' },
      });
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ error: "Client not found or inactive" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching client" });
    }
  }


}