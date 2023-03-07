import { Express } from "express";
import Healthcheck from "./healthcheck"
import User from "./users/index"

const router = (app: Express)=>{
    app.use("/",Healthcheck)
    app.use("/api",User)
    
}

export default router;