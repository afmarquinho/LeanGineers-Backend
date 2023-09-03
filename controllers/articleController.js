import { isEmpty } from "../helpers/validations.js";
import Article from "../models/Article.js";

const createArticle = async (req, res) => {
    
  //? OBTAIN FROMREQUEST
  const article = new Article(req.body);

  //? VALIDATE NOR EMPTY FIELDS
  if (isEmpty(req.body.title)) {
    return res.status(400).json({
      msg: "el título es obligatorio",
    });
  }
  if (isEmpty(req.body.content)) {
    return res.status(400).json({
      msg: "el contenido es obligatorio",
    });
  }
  if (isEmpty(req.body.author)) {
    return res.status(400).json({
      msg: "el autor es obligatorio",
    });
  }
  if (isEmpty(req.body.author)) {
    return res.status(400).json({
      msg: "Indicar la categoría del artículo",
    });
  }

  //? SAVE TO BD
  try {
    const savedArticle = await article.save();
    res.status(201).json({
      success: true,
      msg: "Articulo guardado exitosamente",
      data: savedArticle,
    });
  } catch (error) {
    console.error(error);
    res.satus(500).json({
      error: true,
      msg: "Error al guardar el articulo en la base de datos",
    });
  }
};
export { createArticle };
