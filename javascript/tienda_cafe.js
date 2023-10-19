// -variables, constantes, tipos de datos, operadore -estructuras de control, funciones//
// let: variable que  trabaja local y no se puede sobredeclarar, var: variable que trabaja de manera global y se puede sobredeclarar

// while

//recorrer una cadena
// function iterarCadena(cadena){
//     contador = 0;
//     while(contador < cadena.length){
//         /**
//          * cadena[0] = H
//          * cadena[1] = o
//          * cadena[2] = l
//          * cadena[3] = a
//          */
//         document.write(cadena[contador] + "<br>");
//         contador++;
//     }
// }

// iterarCadena("Hola");

// function contarVocales(arreglo) {
//     let contador2 = 0;

//     let contar_vocales = 0;
//     while(contador2 < arreglo.length) {
//         if(arreglo[contador2] == "a" || arreglo[contador2] == "e" || arreglo
//         [contador2] == "i" || arreglo[contador2] == "o" || arreglo[contador2] == "u") {

//             contar_vocales++; //contar_vocales = contar_vocales + 1
//         }
//         contador2++;
//     }
//     document.write("<br>Tu arreglo tiene " + contar_vocales + "vocales");
// }

// contarVocales(["a", "d", "i", "o", "s"]);



//do while
function contador(numero) {
    do {
        document.write("numero: " + numero + "<br>");
        numero++;
    } while (numero <= 20)
}
contador(5);

function decremento(mensaje) {
    let contador3 = mensaje.length; //10

    do {
        document.write(mensaje[contador3]);
        contafor3--;
    } while (contador3 >= 0);
}
decremento("hola praxis")