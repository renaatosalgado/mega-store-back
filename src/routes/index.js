import { Router } from "express";
import authRouter from "./authRouter.js";
import departmentRouter from "./departmentRouter.js";
import productsRouter from "./productsRouter.js";

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(departmentRouter);

export default router;
