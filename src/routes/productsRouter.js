import { Router } from "express";
import {
  singleProduct,
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItemFromCart,
} from "../controllers/productsController.js";
import { validateToken } from "../middleware/validateTokenMiddleware.js";

const productsRouter = Router();

productsRouter.get("/products/:productId", singleProduct);
productsRouter.post("/add-to-cart", validateToken, addToCart);
productsRouter.get("/get-cart", validateToken, getCart);
productsRouter.put("/update-quantity", validateToken, updateItemQuantity);
productsRouter.delete("/delete-cart-item/:productId", validateToken, deleteItemFromCart);

export default productsRouter;
