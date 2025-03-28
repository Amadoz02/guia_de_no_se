import express from "express";
import bodyParser from "body-parser";
import CategoriasRoutes from "./routes/CategoriasRoutes.js";



const app=express();

app.use(bodyParser.json());

app.use(express.urlencoded({"extended": true}));

app.use("/categorias", CategoriasRoutes);

app.listen(3000, ()=>{
    console.log("hola simple 123");
});

