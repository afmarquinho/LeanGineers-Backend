import { isEmpty,isPositiveInteger } from "../helpers/validations.js";
import Article from "../models/Article.js";

const createArticle = async (req, res) => {
  //? OBTAIN PARAMETERS FROM REQUEST
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

const listArticle = async (req, res) => {
  //? OBTAIN PARAMETERS FROM REQUEST
  const pageNumber = parseInt(req.query.page);
  const perPageNumber = parseInt(req.query.perPage);
  const skip = (pageNumber - 1) * perPageNumber;
  //? VALIDATE NOR EMPTY FIELDS
  // TODO: HACER LA VALIDACION DE QUE EL NUMERO SEA POSITIVO EN PERPAGE Y PAGE
  if (!pageNumber || !perPageNumber) {
    return res.status(400).json({
      error:
        "Los parámetros page y perPage son obligatorios y deben ser positivos",
    });
  }

  try {
    //? OBTAIN ARTICLES FROM BD
    const articleAmount = await Article.countDocuments();
    const articles = await Article.find().skip(skip).limit(perPageNumber);
    res.status(200).json({
      success: true,
      page: pageNumber,
      perPage: perPageNumber,
      articleAmount: articleAmount,
      data: articles,
    });
  } catch (error) {
    console.error(error);
    res.satus(500).json({
      error: true,
      msg: "Error al obtener articulos",
    });
  }
};

export { createArticle, listArticle };
