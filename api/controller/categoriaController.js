import {Categoria} from "../models/Categoria.js";
const tabla="categorias"
class CategoriaController
{
  static getCategoriasById = async (req, res) => {
    const { id } = req.params;
    const OBJCategoria = new Categoria();
    const categoria = await OBJCategoria.getById(id);
    res.json(categoria);
  }

  static getAllCategoria = async (req,res) => 
  {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll(tabla);
    res.json(categorias);
  }
  
  static createCategoria = async (req, res) =>{
    const {nombre, descripcion} = req.body;         
    try {
        const OBJCategoria = new Categoria(); 
        const categoria = await OBJCategoria.create(tabla,nombre, descripcion); 
        res.status(201).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


  static actualizarCategoria = async (req, res) =>
    {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      try {
        const OBJCategoria = new Categoria()
        const categoria = await OBJCategoria.update(tabla,nombre, descripcion,id);
        res.json(categoria)
      } catch (error) {
        res.status(500).json({ error: error.message});
      }
  }

    static actualizarParcialCategoria = async (req, res) => {
      const {id} = req.params;
      const {nombre,descripcion} = req.body;
      const campos = req.body;
      try {
          const OBJCategoria = new Categoria();
          const categoria = await OBJCategoria.patch(tabla,id,nombre,descripcion,campos);
          res.json(categoria);
      } catch (error) {
          res.status(500).json({error: error.message});
      }
  }
  static eliminarCategoria = async (req, res) => {
    const {id} = req.params;
    const {nombre,descripcion} = req.body;
    try {
        const OBJCategoria = new Categoria();
        const categoria = await OBJCategoria.delete(tabla,id);
        res.json(categoria);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  }
  
}
export default CategoriaController;