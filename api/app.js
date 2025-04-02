import bodyParser from "body-parser";
import express from "express";

import categorias from "./routes/categorias.js"

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/categorias", categorias);


app.listen(3000, () => {
  console.log("Hola Nodemon");
});