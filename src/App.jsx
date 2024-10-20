import React from "react";
import Hola from "./components/Hola";
import Listado from "./components/Listado/Listado";
import FetchList from "./components/Fetch/FetchList";
function App() {

  // retorno jsx
  console.log("hola desde react");
  const nombre = "Thomas";
  const objeto = [
    {id:1, nombre: 'Thomas'},
    {id:2, nombre: 'Mica'},
    {id:3, nombre: 'Lucas'},
    {id:4, nombre: 'Dron'},
  ]
  return (
    <>
      <h1>Hola {nombre}</h1>


      <h2>Nombres</h2>
      <ul className="" style={{color: 'blue'}}>
         {objeto.map((usuario, indice) => 
           <li key={indice}>
            { usuario.nombre}
           </li>
         )}
      </ul>
    
      <Hola name={nombre}/>
      <Listado listado={objeto}>
        {/* todo lo que mande por aca va ir a children */}
        <h1>Hola desde App.jsx</h1>
      </Listado>
      <FetchList></FetchList>
    </>
  );
}

export default App;
