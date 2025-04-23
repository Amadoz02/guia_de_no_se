import conection from "../utils/database.js";

export class Categoria {
  // constructor(nombre, descripcion) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }
  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias WHERE id = ?",[id]);
      return rows;
    } catch (error) {
      throw new Error("ERROR: al obtener categorias");
    }
  }

  async getAll(tabla) {
    try {
      const [rows] = await conection.query(`SELECT * FROM ${tabla}`);
      return rows;
    } catch (error) {
      throw new Error(`Error al obtener ${tabla}`);
    }
  }
  
  async create(tabla,nombre, descripcion) {
    try {            
        const [result] = await conection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [nombre, descripcion]);
    return {id: result.id, nombre, descripcion };
    } catch (error) {
      throw new Error("Error al crear la categpría");  
    }
  }

  async update(tabla, nombre, descripcion, id)
  {
    try {
      console.log("Desde la clase",nombre,descripcion,id);
      const [result] = await conection.query(`UPDATE ${tabla} SET nombre = ?,descripcion = ? WHERE id = ?`,
        [nombre, descripcion, id]);
      if (result.affectBows === 0) {
        throw new Error(`elemento de ${tabla}  no encontrado`);
      }
      return {
        id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }

  async patch(tabla,id,nombre,descripcion,campos)
    {
        try {
        let sql = `UPDATE ${tabla} SET `;
        for (let cont = 0; cont < Object.keys(campos).length; cont++)
        {
            let value = Object.keys(campos)[cont];
            sql += `${value} = '${campos[value]}'`;
            cont == Object.keys(campos).length-1 ? sql += "" : sql += ",";
        }
        sql += ` WHERE id= ${id}`;
        const [result] = await conection.query(sql);
        if(result.affectedRows === 0){
            throw new Error(`elemento de ${tabla}  no encontrado`); 
        }
        return { id,nombre,descripcion} 

        } catch (error) 
        {
            console.log(error.message);
            throw new Error("Error al generar el patch");
        }
    }
    async delete(tabla, id)
    {
      try {

        
      const [rows] = await conection.query("SELECT * FROM productos WHERE categoria_id = ?", [id]);

      if(rows.length == 0) {
        const [result] = await conection.query("DELETE FROM categorias WHERE id = ?", [id]);
        if (result.affectedRows == 0) throw new Error("Categoría no encontrada");
      }
      else throw new Error("No se puede eliminar esta categoría porque tiene productos asocioados.");
      
      return {id}
      } catch (error) 
      {
        console.log(error.message);
        throw new Error("Error al eliminar"); 
      }
    }
}
  
