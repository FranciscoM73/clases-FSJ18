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

estudiantes.map(persona => {
    if(persona.direccion == "san salvador"){
        document.write("estudiantes:" + persona.nombre + "<br>");
    }
})
//metodo filter = sirve para filtrar datos de un arreglo (condicion)
// el filter siempre pide un nuevo arreglo
document.write("<h3>utilizando filter</h3>");
let arreglo_filtrado = estidiantes.filter(item => item.direccion == "san salvador"); 

arreglo_filtrado.map(estudiantes => {
  document.write("estudiantes filtrado:" + estudiantes.nombre + "<br>");
})

document.write("<h3> filtrado y mapeado</h3>")