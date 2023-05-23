import { Router } from "express";
const routes = Router();

import postRoutes from "./postRoutes.js";
import userRoutes from "./userRoutes.js";

routes.use("/posts",postRoutes)
routes.use("/users",userRoutes)


export default routes;
