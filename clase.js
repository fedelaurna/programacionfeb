let botonElement = document.getElementById("boton");
let pElement = document.getElementById("contador");
let contador = 0;
botonElement.onclick = function () {
    contador ++;
    pElement.textContent = contador;

// si le pones contador = contador + 1 se suma de a 2.
    if (contador >= 50){   
        contador = contador + 2
 
    }
 }

