import express, { Request, Response } from "express";

const router = express.Router();

/**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
router.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

export default router;
