import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./datasource";
import { Station } from "./entity/Station";
import { Journey } from "./entity/Journey";

const server = express();

server.get("/", (req, res) => {
  return res.send("ok");
});

server.get("/stations", async (req, res) => {
  try {
    const stationRepository = AppDataSource.getRepository(Station);
    const stations = await stationRepository.find();

    return res.status(200).send(stations);

  } catch (error: unknown) {
    return res.status(500).send({ error });
  }
});

server.get("/journeys", async (req, res) => {
  try {
    const journeyRepository = AppDataSource.getRepository(Journey);
    const journeys = await journeyRepository.find({ take: 100 });

    return res.status(200).send(journeys);

  } catch (error: unknown) {
    return res.status(500).send({ error });
  }
});

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
