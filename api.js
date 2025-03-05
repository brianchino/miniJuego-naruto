const origen = "https://naruto-api-rsl3.onrender.com/api/v1/characters"

window.addEventListener('DOMContentLoaded', evento =>{
    cargarDatos(origen);
    const boton = document.querySelector('button'); 
    boton.addEventListener('click', () => {
        cambiarModo();
    });
    evento.preventDefault();
});
let personajes = [];

async function cargarDatos(origen){
    let datos =  await fetch(origen)
                        .then(respuesta => respuesta.json())
                        .then(datos => datos);
    
    personajes = [];
    for (let d of datos) {
        personajes.push({
          nombre: d.name,
          imagen: d.images[0], 
        });
    }
    // mostrar personajes
    let apartado = document.querySelector('.personajes');

    let primerPersonajeDiv = document.createElement('div');
    let primerNombre = document.createElement('p');
    let primeraImagen = document.createElement('img');

        primerNombre.textContent = personajes[0].nombre;
        primeraImagen.setAttribute('src', personajes[0].imagen);
        primeraImagen.setAttribute('data-index', '0');

        primerPersonajeDiv.appendChild(primerNombre);
        primerPersonajeDiv.appendChild(primeraImagen);
        apartado.appendChild(primerPersonajeDiv);

    let segundoPersonajeDiv = document.createElement('div');
    let segundoNombre = document.createElement('p');
    let segundaImagen = document.createElement('img');

        segundoNombre.textContent = personajes[1].nombre;
        segundaImagen.setAttribute('src', personajes[1].imagen);
        segundaImagen.setAttribute('data-index','1');

        segundoPersonajeDiv.appendChild(segundoNombre);
        segundoPersonajeDiv.appendChild(segundaImagen);
        apartado.appendChild(segundoPersonajeDiv);        
        
    primeraImagen.addEventListener('click', () => cambiarPersonaje(segundaImagen,segundoNombre));
    segundaImagen.addEventListener('click',() => cambiarPersonaje(primeraImagen,primerNombre));
        
        
}
async function cambiarPersonaje(otraImagen,otroNombre){
    if(personajes.length > 0){
        indiceActual = parseInt(otraImagen.getAttribute('data-index'));
        if(indiceActual + 1 < personajes.length){
            otraImagen.setAttribute('src',personajes[indiceActual + 1].imagen);
            otraImagen.setAttribute('data-index',String(indiceActual + 1));
            otroNombre.textContent = personajes[indiceActual + 1].nombre;
            personajes.splice(indiceActual,1);
        }
        else{
            console.log("juego terminado");
        }    
    }
    else{
        console.log("juego terminado");
    }
}
async function cambiarModo(){
    const modo1 = 'url("http://127.0.0.1:5500/patron-nubes-orientales-dibujado-mano_23-2151180374.avif")';
    const modo2 ='url("http://127.0.0.1:5500/red-cloud-pattern-background-design-perfect-for-clothing-textile-pillow-fabric-print-and-more-free-vector.jpg")';
    cuerpo =document.querySelector('body');
    
    if ( window.getComputedStyle(cuerpo).backgroundImage === modo1){
        cuerpo.style.backgroundImage = modo2;
        console.log( window.getComputedStyle(cuerpo).backgroundImage);
    }
    else{
        cuerpo.style.backgroundImage = modo1;
        console.log( cuerpo.style.backgroundImage);
    
    }
}
