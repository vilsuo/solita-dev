import { Router} from "express";
import { AppDataSource } from "../datasource";
import { Journey } from "../entity/Journey";

const router = Router();

const journeyRepository = AppDataSource.getRepository(Journey);

router.get("/", async (_req, res) => {
  try {
    const journeys = await journeyRepository.find({ take: 100 });
    return res.status(200).send(journeys);

  } catch (error: unknown) {
    return res.status(500).send({ error });
  }
});


export default router;
