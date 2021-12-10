console.log("listado de Personas");

const personas = [
    //new Persona('Juan' , 'Perez', '15', 'xela'),
    //new Persona('Matias', 'Groso','20', 'quiche')
];

function mostrarPersonas(){
    console.log('Se esta ejecudando el metodo')
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += '<li>${persona.nombre} ${persona.apellido}</li>';
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    //const forma = document.getElementById
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const cui = forma['cui'];
    const depto = forma['depto'];
    //if(nombre.value !=)
    const persona = new Persona(nombre.value, apellido.value, parseInt(cui.value), depto.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
}