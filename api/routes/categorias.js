import express from "express";
import CategoriaController from "../controller/categoriaController.js";
import  {validarCategoria} from "../midelware/validateCategory.js"


const router = express.Router();
router.get("/", CategoriaController.getAllCategoria);

router.post("/",validarCategoria, CategoriaController.createCategoria);


router.put("/:id", CategoriaController.actualizarCategoria);

router.patch("/:id", CategoriaController.actualizarParcialCategoria);

router.delete('/:id', CategoriaController.eliminarCategoria);

  
  
export default router;