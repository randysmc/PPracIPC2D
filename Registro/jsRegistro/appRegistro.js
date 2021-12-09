console.log("Registro de personas");

function registrar(){
    console.log("Hola bienvenido usuario que se quiere registrar");
    const registro = document.getElementById('registro');
    let nombre = registro['nombre'];
    let usuario = registro['usuario']
    let correoElectronico = registro['correoElectronico'];
    let constrasenia = registro['contrasenia'];
    let confContrasenia = registro['confirmarContrasenia']

    if(contrasenia === confContrasenia){
        console.log("Bienvenido, usuario creado correctamente");
        let saludo = "Hola " + nombre.value + " Bienvenido";
        console.log(saludo);

    }
    else if(contrasenia != confContrasenia){
        console.log("Las contraseñas no son iguales, intente de nuevo");
    }
    //document.getElementById('mensaje').innerHTML = saludo;
}