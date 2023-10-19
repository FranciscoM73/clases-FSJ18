import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/style.css'

//importando el componente encabezado
import Encabezado from './componentes/Encabezado'
import lista from './componentes/lista'

function App() {
  let mensaje = "estamso trabajando fuera de return";
   //return mandamos la informacion que el usuario va a ver
  return (
    //<>contenedor padre para react
    <>
      <Encabezado usuario="juan"/>
      <Encabezado/>
      <h1>bienvenido a react</h1>
      <p>hola</p>
      {/**con llaves asignamos codigo javascript */}
      <h2>{mensaje}</h2>
      <lista />
    </>
    
  )
}

export default App
