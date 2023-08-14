import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({listaProductos, onSetProductos}) {

  // const [productos, setProductos] = useState([]);
  const params = useParams();




  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${params.id}&limit=${"5"}&offset=${"30"}`)
      .then(response => response.json())
      .then(data => {
        onSetProductos(data.results);
      })
      
  },[params.id]);




  return (
    <>
      <ItemList productos={listaProductos}/>
    </>
  )
}

export default ItemListContainer