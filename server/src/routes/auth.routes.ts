import { Router } from "express";
import { LoginUser } from "../controllers/auth/login.controller";

const router = Router();

router.post("/login", LoginUser);

export default router;
