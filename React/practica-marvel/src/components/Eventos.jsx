import React, { useState, useEffect } from 'react'
//importando axios
import axios from 'axios'

export default function Eventos() {
    //crear un estado para almacenar los eventos de la api 
    const [eventos, setEventos] = useState([]);

    //metodo para hacer la peticion de la api con axios
    const obtenerEventos = () => {
        //creando la peticion get()
        /**
         * then => obtener la respuesta de la peticion (json)
         * status: 200 => exito
         * status: 500 => servido fallo
         * 
         * catch => manejo de errores
         * status 
         * 
         * try - catch (fetch) 404 => no encuentra coincidencia
         */
          axios.get("https://gateway.marvel.com/v1/public/events?ts=1&apikey=df975b1c71659f9e1c8d010977ef2579&hash=b252f00875b9a8992678fd8f0972ea1f").then((response) => {
            console.log(response.data.data.results); //[20 eventos]
            //actualizamos el estado con los eventos de la API
              setEventos(response.data.data.results);
        }).catch((error) => {
            console.log(error);    
        })
    }

    //useEffect => hacemos un renderizado del metodo que contiene la informacion de la lista de eventos
    /**
     * este hook permite 2 parametros (opcionales)
     * primer parametro = funcion anonima 
     * segundo paramtro es un arreglo vacio = [] //signamos un arreglo vacio
     */
    useEffect(() => {
        //llamamos el metodo obtenerEventos para que lo ejecute de una sola vez
        obtenerEventos();
    }, [])

    console.log(eventos)
    return (
        <div className='eventos'>
            <h1 className='text-center text-white'>Lista de Eventos</h1>
            <div className='row'>
                {
                    eventos.map((item, indice) => {
                        return (
                            <div className='col-md-4 mt-4'>
                                <div className='card'>
                                    <h5 className='card-header'>{item.title}</h5>
                                    <div className='card-body'>
                                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" className='img-fluid'/>
                                        <p>ID del evento: {item.id}</p>
                                        <a href={item.urls[0].url} className='btn btn-outline-success' target='_blank'>Ver mas detalles</a>
                                    </div>
                                </div> 
                            </div>
                        )
                   }) 
                }
             </div>
        </div>
    )
  
}
