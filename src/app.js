import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.js";

const server = express();
server.use(json());
server.use(cors());

server.use(router);

server.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});