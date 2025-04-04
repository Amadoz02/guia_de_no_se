import express from "express";
import ProductoController from "../controller/productoController.js";
// import  {validarproductos} from "../midelware/validateCategory.js"


const router = express.Router();
router.get("/", ProductoController.getAllProductos);

router.post("/", ProductoController.createProducto);


router.put("/:id", ProductoController.actualizarproductos);

router.patch("/:id", ProductoController.actualizarParcialproductos);

router.delete('/:id', ProductoController.eliminarproductos);

  
  
export default router;