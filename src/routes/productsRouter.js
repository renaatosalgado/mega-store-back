import { Router } from "express";
import { singleProduct, addToCart } from "../controllers/productsController.js";
import { validateToken } from "../middleware/validateTokenMiddleware.js";

const productsRouter = Router();

productsRouter.get("/products/:productId", singleProduct);
productsRouter.post("/add-to-cart", validateToken, addToCart)

export default productsRouter;
