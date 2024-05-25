let imagenes = ["https://raw.githubusercontent.com/FabriiArias/turismo-argentino360/main/imagenes/Carrousel/centroia2.jpg",
                "https://raw.githubusercontent.com/FabriiArias/turismo-argentino360/main/imagenes/Carrousel/noria2.jpg",
                "https://raw.githubusercontent.com/FabriiArias/turismo-argentino360/main/imagenes/Carrousel/suria2.jpg"                
                ];

document.ImgCarru.src = imagenes[0];
let contador = 0;



function moverDer(){
    contador++;
    if(contador > imagenes.length -1){
        contador = 0;
    }
    document.ImgCarru.src = imagenes[contador];
    
}

function moverIzq(){
    contador--;
    if(contador < 0){
        contador = imagenes.length -1;
    }
    document.ImgCarru.src = imagenes[contador];
}
/* ------------ intervalo para que se vaya pasando sola ------------ */

let intervalo = setInterval(moverDer,4000); 

function limpiarIntervaloDer(){
    clearInterval(intervalo);
    moverDer();
    intervalo = setInterval(moverDer(),4000);
    console.log("der");
}

function limpiarIntervaloIzq(){
    clearTimeout(intervalo);
    moverIzq();
    intervalo = setInterval(moverIzq(),4000);
    
    
}
