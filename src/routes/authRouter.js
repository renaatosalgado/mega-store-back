import { Router } from "express";
import { validateSignUp } from "../middleware/validateSignUpMiddleware.js";
import { validateLogin } from "../middleware/validateLoginMiddleware.js";
import { login, signUp, deleteSession } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.post("/login", validateLogin, login);
authRouter.delete("/delete-session/:tokenNumber", deleteSession);

export default authRouter;
