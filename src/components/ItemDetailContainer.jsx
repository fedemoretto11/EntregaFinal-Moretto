import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({listaProductos, producto, onSetProducto}) {

  const paramProduct = useParams();

  useEffect(() => {
    onSetProducto(listaProductos.find((prod) => prod.id == paramProduct.id));

  },[])







  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer