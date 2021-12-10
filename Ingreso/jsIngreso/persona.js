console.log("Clase persona");
class Persona{
    constructor(nombre, apellido, cui, departamento){
        this._nombre = nombre;
        this._apellido = apellido;
        this._cui = cui;
        this._departamento = departamento;
        
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
    get cui(){
        return this._cui;
    }
    set cui(cui){
        return this._cui = cui;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        return this._departamento = departamento;
    }
}