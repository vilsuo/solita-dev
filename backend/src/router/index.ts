import { Router} from "express";

// routers
import stationRouter from "./stations";
import journeyRouter from "./journeys";

const router = Router();

router.get("/", (_req, res) => {
  return res.send("ok");
});

router.use('/stations', stationRouter);
router.use('/journeys', journeyRouter);

export default router;
