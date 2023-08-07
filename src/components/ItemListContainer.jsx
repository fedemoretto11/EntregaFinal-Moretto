import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

function ItemListContainer({nombre, mensajeCompleto}) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${"MLA4275"}&limit=${"5"}&offset=${"0"}`)
      .then(response => response.json())
      .then(data => {
        setProductos(data.results)
      })
  },[]);




  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer