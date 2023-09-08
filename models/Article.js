import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
    },
    content: {
      type: String,
      trim: true,
      require: true,
    },
    summary:{
      type: String,
      trim: true,
      require: true,
    },
    imageURL: {
      type: String,
      trim: true,
      required: true,
      default: "img.jpg",
    },
    author: {
      type: String,
      required: true,
    },
    labels: {
      type: [String],
      enum: [
        "innovacion",
        "mejora-continua",
        "sistemas-gestion",
        "inteligencia-negocios",
      ],
    },
  },
  {
    timestamps: true,
  }
);
const Article = mongoose.model("Article", articleSchema);
export default Article;
