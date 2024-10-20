import React from 'react'

// const Hola = (props) => {
  const Hola = ({name}) => {
  console.log(name)
  return (
    <div>Hola {name}</div>
  )
}

export default Hola
