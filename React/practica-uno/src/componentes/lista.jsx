import React, { useState } from 'react'
import listado from './persona.json'
export default function lista() {
    //uti
    const [usuario, setUsuario] = useState(listado);
    //USUARIO = 0 => como empieza el estado
    //setUsuario(10) => ACTUALIZAMOS EL ESTADO 
    //USUARIO = 10 => como termina el estado
    
    //creando el evento del metodo onclick
    
    //creando funciones de flecha
    const eliminarusuario = () => {
        setUsuario([]);
        console.log("se vacio la lsita");
    }
        
    console.log(usuario);
  return (
    <div>
          <h2>listado de usuario</h2>
          <button onclick={eliminarusuario}>Eliminar lista</button><br />
          <button onclick={recuperarusuario}>recuperar lista</button><br />
          {
              
              /**iteramos el json */
              usuario.map((persona, index) => {
                  return (
                      <section>
                          <article>
                              <img src={persona.imagen} alt={persona.nombre} />
                              <h5>usuario: {persona.nombre}</h5>
                              <p>hola! tengo {persona.edad} años de edad</p>
                          </article>
                      </section>
                  )
              })
          }

    </div>
  )
}
