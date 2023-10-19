/*
indice => posicion de los elementos del arreglo //0 1 2
  valor => los elementos de cada posicion
  callback => llamado denuevo al arreglo
  */
let estudiantes = [
    {
        nombre: "francisco marin",
        direccion: "san salvador",
        bootcamp: "fsj18",
    },
    {
        nombre: "carlos solis",
        direccion: "san miguel",
        bootcamp: "fsj17",
    },
    {
        nombre: "ramon nuñez",
        direccion: "chalate",
        bootcamp: "fsj16",
    }
]
/*
MAP() => iterar arreglos
 * - mapea de manera optimizada
 * - puedo retornar un nuevo arreglo
 * - puedo actualizar el arreglo
 * - visualizar indice y valor
 */
estudiantes.map(estudiante => {
    document.write("estudiante:" + estudiante.nombvre + "<br>bootcmap:" + estudiante.bootcamp + "<br>");

    estudiante.direccion = "chalate";
    document.write("direccion:" + estudiante.direccion + "<br>")
})

console.log(estudiantes);

document.write("<h3>nuevo arreglo</h3>");
let nuevo_arreglo = estudiantes.map(value => {
    value.bootcamp = "fsj18";
    return value;
})

console.log(nuevo_arreglo);

nuevo_arreglo.map(item => {
    document.write("Estudiante: " + item.nombre + "<br>Bootcamp: " + item.bootcamp + "<br>Direccion: " + item.direccion + "<br>");
})
