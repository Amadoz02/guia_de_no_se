import express from "express";
import {CategoriaControll} from "../controller/categoriaControl.js"

const router=express.Router();

router.get('/', CategoriaControll.getAllCategorias);

router.post('/', (reg,res)=>{
    console.log(reg.body);
    
});

router.put('/', (reg,res)=>{
    console.log(reg.body);
    
});
export default router;