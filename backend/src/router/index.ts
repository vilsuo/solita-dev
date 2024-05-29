import { Router} from "express";

// routers
import stationRouter from "./stations";

const router = Router();

router.get("/", (_req, res) => {
  return res.send("ok");
});

router.use('/stations', stationRouter);

export default router;
