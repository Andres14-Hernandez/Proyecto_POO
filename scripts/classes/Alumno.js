import UsuarioClass from "./Usuario.js";

export default class Alumno extends UsuarioClass{
    constructor(nombre, apellido, edad, correo, activo, cursosTomados){
        super(nombre, apellido, edad, correo, activo)
        this.cursosTomados = cursosTomados;
        
    }
}