import conection from "../utils/database.js";

 export class Producto {
  // constructor(nombre, descripcion) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }
//   async getAll(tabla) {
//     try {
//       const [rows] = await conection.query(`SELECT * FROM ${tabla}`);
//       return rows;
//     } catch (error) {
//       throw new Error(`Error al obtener ${tabla}`);
//     }
//   }
//   async create(tabla,nombre, descripcion,precio,cat_id) {
//     try {            
//         const [result] = await conection.query(`INSERT INTO ${tabla} 
//             (nombre, descripcion, precio, categoria_id) VALUES (?,?,?,?)`, 
//             [nombre, descripcion,precio,cat_id]);
//     return {
//         id,
//         nombre,
//         descripcion,
//         precio,
//         cat_id
//       };
//     } catch (error) {
//       throw new Error(`Error al crear elemento en ${tabla}`);  
//     }
//   }

//   async update(tabla, nombre, id, descripcion, precio, cat_id) {
//     try {
//         console.log("Desde la clase", nombre, descripcion, id);
//         const [result] = await conection.query(
//             `UPDATE ${tabla} SET nombre = ?, descripcion = ?, precio = ?, categoria_id = ? WHERE id = ?`,
//             [nombre, descripcion, precio, cat_id, id]
//         );

//         if (result.affectedRows === 0) {
//             throw new Error(`Elemento de ${tabla} no encontrado`);
//         }

//         return { id, nombre, descripcion, precio, categoria_id: cat_id };
//     } catch (error) {
//         throw new Error(`Error al actualizar la categoría: ${error.message}`);
//     }
// }

//   async patch(tabla,id,campos)
//     {
//         try {
//         let sql = `UPDATE ${tabla} SET `;
//         for (let cont = 0; cont < Object.keys(campos).length; cont++)
//         {
//             let value = Object.keys(campos)[cont];
//             sql += `${value} = '${campos[value]}'`;
//             cont == Object.keys(campos).length-1 ? sql += "" : sql += ",";
//         }
//         sql += ` WHERE id= ${id}`;
//         const [result] = await conection.query(sql);
//         if(result.affectedRows === 0){
//             throw new Error(`elemento de ${tabla}  no encontrado`); 
//         }
//         return { id,nombre,descripcion,precio,cat_id} 

//         } catch (error) 
//         {
//             console.log(error.message);
//             throw new Error("Error al generar el patch");
//         }
//     }
//     async delete(tabla, id)
//     {
//       try {
//       const [result] = await conection.query(`DELETE FROM ${tabla} WHERE id = ?`,
//         [id]);
//       if(result.affectedRows === 0){
//           throw new Error(`elemento de ${tabla}  no encontrado`); 
//       }else{

//           console.log(`Elemento ${id} de la tabla ${tabla} eliminado correctamente`);
//       }
      
//       return {id}
//       } catch (error) 
//       {
//         console.log(error.message);
//         throw new Error("Error al eliminar"); 
//       }
//     }

    
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM productos");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }

  async create(nombre, descripcion, precio, categoria_id) {
    try {
      const [result] = await conection.query("INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES (?,?,?,?)", [nombre, descripcion, precio, categoria_id]);
      return { id: result.id, nombre, descripcion, precio, categoria_id };
    } catch (error) {
      throw new Error("Error al guardar producto");
    }
  }

  async update(nombre, descripcion, precio, categoria_id, id) {
    try {
      await conection.query("UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria_id = ? WHERE id = ?", [nombre, descripcion, precio, categoria_id, id]);
      if (result.affectedRows == 0) throw new Error("Producto no encontrado");
      return { id, nombre, descripcion, precio, categoria_id };
    } catch (error) {
      throw new Error("Error al actualizar el producto");
    }
  }

  async patch(id, campos) {
    try {

      let comando = "";
      for (const propiedad in campos) {
        comando += `${propiedad} = "${campos[propiedad]}", `
      }

      comando = comando.substring(0, comando.length - 2);
      const [result] = await conection.query(`UPDATE productos SET ${comando} WHERE id = ?`, [id]);
      
      if (result.affectedRows == 0) throw new Error("Producto no encontrado");
      return { id, nombre, descripcion, precio, categoria_id };
    } catch (error) {
      throw new Error("Error al actualizar el producto");
    }
  }

  async delete(id) {
    try {
      const [result] = await conection.query("DELETE FROM productos WHERE id = ?", [id]);
      if (result.affectedRows == 0) throw new Error("Producto no encontrada");
    } catch (error) {
      throw new Error("Error al eliminar el producto");
    }
  }
};

