import conection from "../utils/database.js";

export class Categoria {
  // constructor(nombre, descripcion) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las categorias");
    }
  }
  async create(nombre, descripcion)
  { 
    try {
      const [result] = await conection.query("INSERT INTO categorias(nombre,descripcion) VALUES (?,?)",
        [this.nombre, this.descripcion]);
      return{ 
        id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }

  async update(nombre, descripcion, id)
  {
    try {
      console.log("Desde la clase",nombre,descripcion,id);
      const [result] = await conection.query('UPDATE categorias SET nombre = ?,descripcion = ? WHERE id = ?',
        [nombre, descripcion, id]);
      if (result.affectBows === 0) {
        throw new Error("Categoria no encontarada");
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

  async updateParcial(id, campos)
  {
    try {
      let sql="UPDATE categorias SET ";
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let value= Object.keys(campos)[i];
         sql+=`${value} = "${campos[value]}"`;
         if (i==Object.keys(campos).length-1) {
           sql+="";
         }else{
           sql+=",";
         }
 
       }
       sql+=` WHERE id=${id} `;

      console.log("Desde la clase",nombre,descripcion,id);
      const [result] = await conection.query(sql);
      if (result.affectBows === 0) {
        throw new Error("Categoria no encontarada");
      }
      return {
        id,
        nombre,
        descripcion
      };
    } catch (error) {
      throw new Error("Error al actualizar la los campos");
    }
  }
}
  
