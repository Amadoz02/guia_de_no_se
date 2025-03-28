import  connection  from "../utils/db.js";
export class Categorias {
    constructor(nombre,descripcion) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        
    }
    async getAll(){
        try {
            const[rows]=await connection.query("SELECT * FROM categorias");
            return rows;
        } catch (error) {
            throw new Error("error al obtener las categorias");
            
        }
    }
    async create(){
        try {
            const [result]=await connection.query("INSERT INTO categorias(nombre,descripcion) VALUES (?,?)",[this.nombre, this,this.descripcion]);
            return{
                id: result.id,
                nombre: this.nombre,
                descripcion: this.descripcion
            }
        } catch (error) {
            throw new Error("Error al crear la categoria");
            
        }
    }
}
