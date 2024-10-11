import { Router } from 'express';
import { movieController } from '../controllers/movie.js';
import { verifyAccessToken } from '../middlewares/verifyAccessToken.js';
export const router = Router()


router.get("/", movieController.getAll)
router.post("/", verifyAccessToken, movieController.createOne)
router.patch("/:id",verifyAccessToken, movieController.updateOne)
router.delete("/:id", verifyAccessToken, movieController.deleteOne)