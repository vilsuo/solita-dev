import { Router} from "express";
import { Station } from "../entity/Station";
import { AppDataSource } from "../datasource";

const router = Router();

const stationRepository = AppDataSource.getRepository(Station);

router.get("/", async (_req, res) => {
  try {
    const stations = await stationRepository.find();
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

    return res.status(200).send(station);

  } catch (error: unknown) {
    return res.status(500).send({ error });
  }
});

export default router;
