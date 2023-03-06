import express from "express";
import { updateProductHandler } from "../../controller/product.controller";
import requireUser from "../../middleware/requireUser";
import validateResource from "../../middleware/validateResource";
import { updateProductSchema } from "../../schema/product.schema";

const router = express.Router();

  /**
   * @openapi
   * '/api/products/{productId}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single product by the productId
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */
  router.put(
    "/api/products/:productId",
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );


export default router;
