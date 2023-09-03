import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import articleRoutes from "./router/articleRoutes.js";



const app = express();
app.use(express.json());
dotenv.config();

connectDB();

const whiteList = [process.env.FRONTEND_URL];
app.use(
  cors({
    origin: whiteList,
  })
);

app.use("/api/article", articleRoutes)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
