import { Producto } from "../models/Producto.js";
const tabla="productos";
// class ProductoController
// {

//   static getAllproductos = async (req,res) => 
//   {
//     const OBJproductos = new Producto();
//     const productoss = await OBJproductos.getAll(tabla);
//     res.json(productoss);
//   }
  
//   static createproductos = async (req, res) => {
//         const { nombre, descripcion, precio, categoria_id } = req.body;
//         try {
//             const OBJproductos = new Producto();
//             const productos = await OBJproductos.create(tabla, nombre, descripcion, precio, categoria_id);
//             res.status(201).json(productos);
//         } catch (error) {
//             console.error("Error en createproductos:", error.message);
//             res.status(500).json({ error: error.message });
//         }
//     };



//   static actualizarproductos = async (req, res) =>
//     {
//       const { id } = req.params;
//       const { nombre, descripcion,precio,categoria_id } = req.body;
//       try {
//         const OBJproductos = new Producto()
//         const productos = await OBJproductos.update(tabla,nombre,id, descripcion,precio,categoria_id);
//         res.json(productos)
//       } catch (error) {
//         res.status(500).json({ error: error.message});
//       }
//   }

//     static actualizarParcialproductos = async (req, res) => {
//       const {id} = req.params;
//       const {nombre,descripcion,precio,categoria_id} = req.body;
//       const campos = req.body;
//       try {
//           const OBJproductos = new Producto();
//           const productos = await OBJproductos.patch(tabla,id,campos);
//           res.json(productos);
//       } catch (error) {
//           res.status(500).json({error: error.message});
//       }
//   }
//   static eliminarproductos = async (req, res) => {
//     const {id} = req.params;
//     try {
//         const OBJproductos = new Producto();
//         const productos = await OBJproductos.delete(tabla,id);
//         res.json(productos);
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
//   }
  
// }
// export default ProductoController;




class ProductoController {

    static getAllProductos = async (req, res) => {
      const OBJProducto = new Producto();
      const productos = await OBJProducto.getAll();
      res.json(productos);
    }
  
    static createProducto = async (req, res) => {
      
      try {
        const { nombre, descripcion, precio, categoria_id } = req.body;
      
        const OBJProducto = new Producto();
        const producto = await OBJProducto.create(nombre, descripcion, precio, categoria_id);
        res.status(201).json(producto);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    static actualizarproductos = async (req, res) =>
    {
      const { id } = req.params;
      const { nombre, descripcion,precio,categoria_id } = req.body;
      try {
        const OBJproductos = new Producto()
        const productos = await OBJproductos.update(nombre, descripcion, precio, categoria_id, id);
        res.json(productos)
      } catch (error) {
        res.status(500).json({ error: error.message});
      }
  }

    static actualizarParcialproductos = async (req, res) => {
      const {id} = req.params;
      const {nombre,descripcion,precio,categoria_id} = req.body;
      const campos = req.body;
      try {
          const OBJproductos = new Producto();
          const productos = await OBJproductos.patch(id,campos);
          res.json(productos);
      } catch (error) {
          res.status(500).json({error: error.message});
      }
  }
  static eliminarproductos = async (req, res) => {
    const {id} = req.params;
    try {
        const OBJproductos = new Producto();
        const productos = await OBJproductos.delete(id);
        res.json(productos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  }
}
  export default ProductoController;