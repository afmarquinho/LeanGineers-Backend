import express from "express";
import {
  createArticle,
  listArticle,
  getArticle,
  editArticle,
  deleteArticle,
} from "../controllers/articleController.js";

const router = express.Router();

router.get("/", listArticle);
router.route("/:id").get(getArticle).put(editArticle).delete(deleteArticle);
router.post("/create-article", createArticle);

export default router;
