import { Router } from "express";
import { addUserOrder, getOrders } from "../controllers/userController.js";
import { validateToken } from "../middleware/validateTokenMiddleware.js";

const userRouter = Router();

userRouter.post("/add-order", validateToken, addUserOrder);
userRouter.get("/get-orders", validateToken, getOrders);

export default userRouter;
