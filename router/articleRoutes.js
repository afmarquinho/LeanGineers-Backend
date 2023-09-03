import express from "express";
import { createArticle } from "../controllers/articleController.js";

const router = express.Router();

// router.get("/", async (req, res) => {
//   res.json({
//     msg: "este es un mensaje de prueba",
//     ok: "true",
//   });
// });
router.post("/create-article", createArticle);

export default router;
