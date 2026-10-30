let botonAnaranjado = document.getElementById("anaranjado");
let botonNegro = document.getElementById("negro");
let botonGris = document.getElementById("gris");

botonAnaranjado.addEventListener("click",function(){
    document.body.style.backgroundColor = "orange";
});

botonNegro.addEventListener("click",function(){
    document.body.style.backgroundColor = "black";
});

botonGris.addEventListener("click",function(){
    document.body.style.backgroundColor = "gray";
});
