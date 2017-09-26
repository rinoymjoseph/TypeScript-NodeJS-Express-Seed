import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let getEmployee = (req: Request, res: Response) => {
  res.send("Received Get Employee Request..");
};