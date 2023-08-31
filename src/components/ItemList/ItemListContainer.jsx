import '../../styles/style.scss'
import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../database/Data"
import { getDocs , collection, addDoc } from "firebase/firestore"



function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const params = useParams();


  useEffect(()=> {
    const collectionProducts = collection(db, "productos");
    const listProducts = getDocs(collectionProducts);
    listProducts
      .then((result) => {
        const productsToMap = result.docs.map((product) => {
          return {id: product.id, ...product.data()}
        })
        if(params.id) {
          setProducts(productsToMap.filter((product) => product.category === params.id))
        } else {
          setProducts(productsToMap)
        }
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