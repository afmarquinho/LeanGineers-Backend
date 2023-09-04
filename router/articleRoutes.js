import express from "express";
import { createArticle, listArticle } from "../controllers/articleController.js";

const router = express.Router();

router.get("/", listArticle);
router.post("/create-article", createArticle);

export default router;
