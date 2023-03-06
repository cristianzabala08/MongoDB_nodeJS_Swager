import express from "express";
import { createUserHandler, getUserAll } from "../../controller/user.controller";
import validateResource from "../../middleware/validateResource";
import { createUserSchema } from "../../schema/user.schema";

const router = express.Router();



  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  router.post("/users", validateResource(createUserSchema), createUserHandler);

  /**
   * @openapi
   * /api/getUsers:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.get("/getUsers",getUserAll);


export default router;
