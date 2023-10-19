//componentes
/**funcional => rfc
 * de clase
 */
import React from 'react'

export default function Encabezado(props) {
  return (
    <header className='Encabezado'> 
      <h1>{props.usuario}, estas utilizando props</h1>
          <nav>
              <ul>
                  <li>Home</li>
                  <li>Lista</li>
                  <li>Contacto</li>
              </ul>
          </nav>
    </header>
  )
}

