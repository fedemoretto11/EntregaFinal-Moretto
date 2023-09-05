import '../../styles/style.scss'
import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../database/Data"
import { getDocs , collection, query, where } from "firebase/firestore"



function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const params = useParams();


  useEffect(()=> {
    const collectionProducts = collection(db, "productos");
    let queryFilter;
    if (params.id) {
      queryFilter = query(
        collectionProducts,
        where("category", "==", params.id)
        )
    } else {
      queryFilter = collectionProducts
    }

    const listProducts = getDocs(queryFilter);

    listProducts
      .then((res) => {
        const productsMapped = res.docs.map((product) => {
          return {id: product.id, ...product.data()}
        })
        setProducts(productsMapped)
      })
      .catch((err) => {
        console.error("Error: ", err)
      })


  },[params.id])
  


  return (
    <>
      <ItemList 
        products={products}
      />
    </>
  )
}

export default ItemListContainer