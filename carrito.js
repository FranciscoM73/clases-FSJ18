//asignacion de variables
const carrito = document.getElementById('carrito');
const bodyCarrito = document.querySelector('tbody');
const footerCarrito = document.querySelector('tfoot');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('.lista-cursos');
//arreglo para los cursos que seleccione el user
let arregloCarrito = [];



cargarEventos();
//metodo para llamar a las demas funciones que se efectuaran en el carrito
function cargarEventos() {
    //addEvenlistener
    //asignamos la atencion al contenedor main para seleccionar un curso
    listaCursos.addEventListener('click', seleccionarCurso);
}
//metodo para saber que curso selecciono el usuario
function seleccionarCurso(e) {
    //validar que el hipervinculo no genere la redireccion
    //preventDefault = es un metodo que cancela la accion por default de un elemento html
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')){
        console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerdatosCurso(cursoSeleccionado);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'curso agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

//metodo para almasenar los valores
function leerdatosCurso(curso) {
    //console.log(curso);
    const objetoCurso = {
        imagen: curso.querySelector('img').src, //capturando la direccion de la imagen
        titulo: curso.querySelector('h5').textContent, //capturanbdo eltexto del h5
        precio: curso.querySelector('.precio').textContent,//$15.00
        id: curso.querySelector('a').getAttribute('data-id'),
        //sacando el valor que hay dentro del data.id
        cantidad: 1
    }
    //validar que el curso ya existe en el arreglo
    //metodo some => metodo que retorna si la condicion se cumple en algun elemento del areglo y false si no se culple
    const existe_curso = arregloCarrito.some(curso => curso.id === objetoCurso.id);
    console.log(existe_curso);
    if (existe_curso) {
        //iterando el arreglo para condicionar que curso vamos actualizar
        arregloCarrito.map(curso => {
            if (curso.id === objetoCurso.id) {
                //incrementamos la cantidad del curso que ya existe y retornamos toda su informacion
                curso.cantidad += 1;
                return curso;
            } else {
                //retornamos la informacion de los demas cursos
                return curso;
            }
        })
    } else {
        arregloCarrito.push(objetoCurso);
    }
    //agregando el curso en un arreglo

    //push() => agrega un elemento al arreglo 
    
    console.table(arregloCarrito);



}

//metodo para interar el arreglo y asignarlo en la tabla html
function carritoTabla() {
    arregloCarrito.map(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>
                <img src="${item.imagen}" width="100">
            </td>
            <td>${item.titulo}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
            <td></td>
            <td>
                <a href="#" class="borrar-item" data-id="${item.id}">
            </td>
        `;
    })
}

function guardarpedido() {
    
}
