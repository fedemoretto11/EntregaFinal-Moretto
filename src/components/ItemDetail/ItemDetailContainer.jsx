import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../database/Data';

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const paramProduct = useParams();

  useEffect(()=> {
    const collectionProducts = collection(db, "productos");
    const docReference = doc(collectionProducts, paramProduct.id)
    const listProducts = getDoc(docReference);

    listProducts
      .then((result) => {
        setProduct({id: result.id, ...result.data()})
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  },[paramProduct.id])

  return (
    <section className='flex justify-center items-center pt-8 min-h-[40rem]'>
      <ItemDetail
        producto={product}
      />
    </section>
  )
}

export default ItemDetailContainer