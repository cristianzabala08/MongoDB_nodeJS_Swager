import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, findUserAll } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserAll(
  req:Request,
  res:Response
) {
  try {
    const data = await findUserAll();
    return res.send(data)
  } catch (e: any){
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
