import { Router } from "express";
import {
  getBooks,
  getCellphones,
  getEletro,
  getFashion,
  getGames,
  getHomeThings,
  getInformatics,
} from "../controllers/departmentController.js";

const departmentRouter = Router();

departmentRouter.get("/cellphones", getCellphones);
departmentRouter.get("/games", getGames);
departmentRouter.get("/eletro", getEletro);
departmentRouter.get("/books", getBooks);
departmentRouter.get("/fashion", getFashion);
departmentRouter.get("/home-things", getHomeThings);
departmentRouter.get("/informatics", getInformatics);

export default departmentRouter;
