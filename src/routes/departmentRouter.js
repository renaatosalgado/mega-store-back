import { Router } from "express";
import { cellphonesGet } from "../controllers/departmentController.js";

const departmentRouter = Router();

departmentRouter.get("/celulares", cellphonesGet);

export default departmentRouter;