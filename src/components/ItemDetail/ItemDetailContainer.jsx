import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../database/Data';


function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const paramProduct = useParams();





  useEffect(()=> {
    const collectionProducts = collection(db, "productos");
    const listProducts = getDocs(collectionProducts);
    listProducts
      .then((result) => {
        const productsToMap = result.docs.map((product) => {
          return {id: product.id, ...product.data()}
        })
        if(paramProduct.id) {
          setProduct(productsToMap.find((product) => product.id === paramProduct.id))
        } else {
          setProduct(productsToMap)
        }
      })



  },[paramProduct.id])


  return (
    <ItemDetail
      producto={product}
    />
  )
}

export default ItemDetailContainer