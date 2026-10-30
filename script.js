let botonRojo = document.getElementById("rojo");
let botonAzul = document.getElementById("azul");
let botonVerde = document.getElementById("verde");

botonRojo.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightcoral";
});

botonAzul.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightblue";
});

botonVerde.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightgreen"
});
