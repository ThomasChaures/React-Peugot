import React, {useState, useEffect} from 'react'
import { List as MuiList, ListItem, ListItemText, CircularProgress } from '@mui/material'

const Listado2 = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setItems(data), setLoading(false))
            .catch(error => {
              setError(error.message)
              setLoading(false)
            })
    }, [])

    console.log(items)
  
    return (!loading) ? (
      <>
         <MuiList>
            {items.map((item, indice) => (
                <ListItem key={indice}>
                    <ListItemText primary={item.name} secondary={item.email} />
                </ListItem>
            ))}
         </MuiList>
      </>
    ) : <><CircularProgress></CircularProgress></>
}

export default Listado2
