import axios from 'axios';
import React, { useState } from 'react'
axios

//busqueda por nombre
export default function Busqueda() {
    //estado donde vamos a obtener el arreglo del personaje en especifico
    const [personajes, setPersonajes] = useState([]);

    //estado donde vamos a tener el nombre del personaje
    const [nombre, setNombre] = useState("");
    //metodo para obtener la informacion del personaje
    const getPersonajeByNombre = () => {
        axios.get(`https://gateway.marvel.com/v1/public/characters?name=${nombre}&ts=1&apikey=df975b1c71659f9e1c8d010977ef2579&hash=b252f00875b9a8992678fd8f0972ea1f`).then((response) => {
            //actualizmos el areglo con la informacion del personaje ue ingreso el usuario
            setPersonajes(response.data.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }
   
    //metodo para capturar el nombre del personaje
    const handleName = (e) => {
        console.log(e.target.value);
        //actualizamos el estado
        setNombre(e.target.value);
    }
    const buscarPersonaje = () => {
        //llamamos el metodo getPersonajeByNombre
        getPersonajeByNombre();
    }

    console.log(personajes);
    
    return (
        <div className='bg-dark text-white'>
            <div className='container'>
                <h1 className='text-center pt-4'>encuentra tu personaje favorito!</h1>

                <label htmlFor="" className='form-label'>ingresa el nombre del personaje</label>

                <input type="text" id='nombre' className='form-control' onChange={handleName}/>
                <button className='btn btn-success mt-4' onClick={buscarPersonaje}>Ver personaje</button>
            </div>
        </div>
    )
}
