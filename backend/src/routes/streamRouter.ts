import { Router } from "express";
import { createStreamToken } from "../controllers/streamControler";

const router = Router();

router.post("/token", createStreamToken);

export default router;
