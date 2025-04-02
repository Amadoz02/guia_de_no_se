import {Categoria} from "../models/Categoria.js";

class CategoriaController
{
  static getAllCategoria = async (req,res) => 
  {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    res.json(categorias);
  }
  static createCategoria = async (req,res) =>
  {
    try
    {
      const { nombre, descripcion } = req.body;
      const OBJCategoria = new Categoria(nombre, descripcion);
      const categoria = await OBJCategoria.create();
      res.status(201).json(categoria);
    } catch (error)
    {
      res.status(500).json({error: error.message});
    }
  }

  static actualizarCategoria = async (req, res) =>
    {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      try {
        const OBJCategoria = new Categoria()
        const categoria = await OBJCategoria.update(nombre, descripcion,id);
        res.json(categoria)
      } catch (error) {
        res.status(500).json({ error: error.message});
      }
  }
  static actualizarCampo= async(req,res)=>{
    const { id } = req.params;
    try {
      const campos= req.body;
      const OBJCategoria = new Categoria()

      const categoria = await OBJCategoria.updateParcial(id, campos);
      res.json(categoria)
      
    } catch (error) {
      res.status(500).json({ error: error.message});
      
    }

  }
  
}
export default CategoriaController;