import { Router} from "express";
import { Station } from "../entity/Station";
import { AppDataSource } from "../datasource";
import { Journey } from "../entity/Journey";

const router = Router();

const stationRepository = AppDataSource.getRepository(Station);
const journeyRepository = AppDataSource.getRepository(Journey);

router.get("/", async (_req, res) => {
  try {
    const stations = await stationRepository.find({
      order: {
        stationName: { direction: "ASC" },
      },
    });
    return res.status(200).send(stations);

  } catch (error: unknown) {
    return res.status(500).send({ error });
  }
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send({ message: "Malformatted id" });
  }

  try {
    const station = await stationRepository.findOneBy({ id });
    if (!station) {
      return res.status(404).send({ message : "Station does not exist" })
    }

    // starting
    const journeysStarting = await journeyRepository
      .findBy({ departureStationId: station.id });

    const journeysStartingCount = journeysStarting.length;

    const totalDistance = journeysStarting.reduce(
      (prev, journey) => prev + (journey.distance || 0), 0
    );

    const totalDuration = journeysStarting.reduce(
      (prev, journey) => prev + (journey.duration || 0), 0
    );

    // ending
    const journeysEndingCount = await journeyRepository
      .countBy({ returnStationId: station.id })

    return res.status(200).send({
      station,
      starting: journeysStartingCount,
      averageDistance: journeysStartingCount ? (totalDistance / journeysStartingCount) : 0,
      averageDuration: journeysStartingCount ? (totalDuration / journeysStartingCount) : 0,
      ending: journeysEndingCount,
    });

  } catch (error: unknown) {
    return res.status(500).send({ error });
  }
});

export default router;
