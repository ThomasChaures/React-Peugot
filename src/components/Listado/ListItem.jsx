import React, {useState} from 'react'
import './listItem.css'
const ListItem = ({item}) => {
    const [contador, setContador] = useState(0)
    const miFunctionClick = () => {
        console.log('click:', contador)
        setContador(contador + 1)
    }
  return (
    <>
        <li className='li'>
            {item.id} - {item.nombre}   
            <button className="btn-primary btn" onClick={miFunctionClick} variant="secondary">Boton</button></li>
        
    </>
  )
}

export default ListItem