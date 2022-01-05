window.addEventListener("load" , inicio, true);

function inicio(){
     document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
  },     true);
     document.getElementById("cifrar").addEventListener("click", function(){
         let texto = document.getElementById("mensaje").value;
         let clave = document.getElementById("clave").value;
         document.getElementById("mensaje2").value = cifrar2(texto, clave);
  },     true);
     document.getElementById("descifrar").addEventListener("click", function(){
         let texto = document.getElementById("mensaje").value;
         let clave = document.getElementById("clave").value;
         document.getElementById("mensaje2").value = descifrar(texto, clave);
  },     true);
}

function cifrar(texto, clave){
    let resultado ="";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    clave = (clave % 26 + 26) %26;

    if (texto){
        for (let i = 0; i<texto.length; i++){
            if (letras.indexOf(texto[i]) !=-1){
              let posicion = ((letras.indexOf(texto[i])+clave)%26);
              resultado += letras[posicion];
            }
            else 
               resultado += texto[i];
        }
    }
    return resultado;
}

function cifrar2 (texto, clave){
    if (!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    clave = (clave % 26 + 26) %26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+clave)%26]);
}
function descifrar (texto, clave){
    if (!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    clave = (clave % 26 - 26) %26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-clave)%26]);
}
 
 /*color:rgba(10, 3, 2, 0.911);
 font-family: cursive;
 font-size: 140%;
 text-align: center;
 background:rgb(194, 160, 12)
}*/


 
