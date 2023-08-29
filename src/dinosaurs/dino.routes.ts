import { Router } from "npm:express@^4.17";
import {
  getDino,
  createDino,
  updateDino,
  deleteDino,
  getDinos,
} from "./dino.controllers.ts";

const router = Router();

router.get("/dino", getDinos);
router.get("/dino/:id", getDino);
router.post("/api/dinosaurs", createDino);
router.put("/dino/:id", updateDino);
router.delete("/dino/:id", deleteDino);

export default router;
