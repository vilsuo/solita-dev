import "reflect-metadata";
import express from "express";
import path from "path";
import { AppDataSource } from "./datasource";
import router from "./router";

const server = express();

server.use(express.static(path.join(__dirname, "..", "dist")));

server.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

server.use("/api", router);

const PORT = 3000;
const start = async () => {
  try {
    await AppDataSource.initialize();

    server.listen(PORT, () => {
      console.log("Server running on PORT", PORT);
    });

  } catch (error: unknown) {
    console.log("Error", error);
  }
};

start();
