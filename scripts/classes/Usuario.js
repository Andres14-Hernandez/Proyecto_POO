export default class UsuarioClass{
    constructor(nombre, apellido, edad, correo, activo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo;
        this.activo = activo;
    }

    presentarse(){
        return`Hola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y mi correo es ${this.correo}.`
    }

    getNombres(){
        return this.nombre
    }

    getApellidos(){
        return this.apellido
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    setApellido(nuevoApellido){
        this.apellido = nuevoApellido
    }

}