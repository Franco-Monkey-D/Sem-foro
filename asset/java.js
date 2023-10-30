function cambiar(){
    /* Para un input tipo select*/
var colores = document.getElementById("cambia");
var indice =colores.selectedIndex;
var texto = colores.options[indice].text;

/* condiciones segun mi lista*/
    if(indice==0){
        alert("Escoge un color")
    }else{
        if(indice==1){
            document.querySelector("#circulo1").classList.add("rojo");
            document.querySelector("#circulo2").classList.remove("amarillo");
            document.querySelector("#circulo3").classList.remove("verde");
            document.querySelector("#caja").classList.add("crojo");
            document.querySelector("#caja").classList.remove("camarillo");
            document.querySelector("#caja").classList.remove("cverde");
        }else{
            if(indice==2){
                document.querySelector("#circulo1").classList.remove("rojo");
                document.querySelector("#circulo2").classList.add("amarillo");
                document.querySelector("#circulo3").classList.remove("verde");
                document.querySelector("#caja").classList.remove("crojo");
            document.querySelector("#caja").classList.add("camarillo");
            document.querySelector("#caja").classList.remove("cverde");
            }else{
                if(indice==3){
                    document.querySelector("#circulo1").classList.remove("rojo");
                    document.querySelector("#circulo2").classList.remove("amarillo");
                    document.querySelector("#circulo3").classList.add("verde");
                    document.querySelector("#caja").classList.remove("crojo");
            document.querySelector("#caja").classList.remove("camarillo");
            document.querySelector("#caja").classList.add("cverde");
                }
            }

        }
    }


/*var marca = document.getElementById("marcas");
var indice = marca.selectedIndex;
var textmar =marca.options[indice].text;*/
}