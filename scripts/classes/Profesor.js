import UsuarioClass from "./Usuario.js";

export default class Profesor extends UsuarioClass{
    constructor(nombre, apellido, edad, correo, activo, cursosDictados, calificacion){
        super(nombre, apellido, edad, correo, activo)
        this.cursosDictados = cursosDictados;
        this.calificacion = calificacion;
    }
}