import '../../styles/style.scss'
import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../database/Data"
import { getDocs , collection } from "firebase/firestore"



function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const params = useParams();


  useEffect(()=> {
    const collectionProducts = collection(db, "productos");
    const listProducts = getDocs(collectionProducts);
    listProducts
      .then((result) => {
        const resultados = result.docs.map((res) => {
          return {id: res.id, ...res.data()}
        })
        if(params.id) {
          setProductos(resultados.filter((pro) => pro.category === params.id))
        } else {
          setProductos(resultados)
        }
      })
  },[params.id])
  


  return (
    <>
      <ItemList 
        productos={productos}
      />
    </>
  )
}

export default ItemListContainer