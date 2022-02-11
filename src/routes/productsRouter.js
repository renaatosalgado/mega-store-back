import { Router } from "express";
import { singleProduct } from "../controllers/productsController.js";
//import { validateToken } from "../middleware/validateTokenMiddleware.js";

const productsRouter = Router();

productsRouter.get("/products/:productId", singleProduct);

export default productsRouter;
