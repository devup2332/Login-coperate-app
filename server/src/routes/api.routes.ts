import { Router } from "express";
import AuthRouter from "./auth.routes";
import PostRouter from "./posts.routes";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/posts", PostRouter);

export default router;
