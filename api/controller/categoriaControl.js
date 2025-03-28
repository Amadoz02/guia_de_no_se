import  json  from "body-parser";
import {Categorias} from "../models/Categoria.js"

export class CategoriaControll{

    static getAllCategorias=async(req,res)=>{
        const OBJcategoria = new Categorias();
        const categorias= await OBJcategoria.getAll();
        res.json(categorias)
        
    }

    static CreateCategoria=async(req,res)=>{
        try {

            const {nombre, descripcion}=req.body;
            const OBJcategoria = new Categorias(nombre,descripcion);
            const categorias= await OBJcategoria.create();
            res.status(201);
            json(categorias);

        } catch (error) {
            console.log(error)
        }
        

    }



}
