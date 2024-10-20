import React from 'react'
import ListItem from './ListItem'

const Listado = ({children, listado}) => {
  return (
    <>
    {children}
    <ul >
            { listado.map((item, indice) => <ListItem key={indice} item={item}/>) }
    </ul>
    </>
  )
}

export default Listado