import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const paramProduct = useParams();


  
  useEffect(() => {
    
  },[]);







  return (
    <ItemDetail/>
  )
}

export default ItemDetailContainer