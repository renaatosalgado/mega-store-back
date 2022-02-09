import { Router } from "express";
import { validateSignUp } from "../middleware/validateSignUpMiddleware.js";
import { signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUp, signUp);

export default authRouter;
