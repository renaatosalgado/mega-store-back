import { Router } from "express";
import { addUserOrder, getOrders } from "../controllers/userController";
import { validateToken } from "../middleware/validateTokenMiddleware";

const userRouter = Router();

userRouter.post("/add-order", validateToken, addUserOrder);
userRouter.get("/get-orders", validateToken, getOrders);

export default userRouter;