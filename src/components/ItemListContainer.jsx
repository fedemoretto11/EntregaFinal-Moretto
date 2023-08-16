import React, { useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



function ItemListContainer({productsList, onProductsListChange}) {

  const params = useParams();
  let category = params.id == undefined ? 'MLA1182' : params.id





  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}&limit=${"10"}&offset=${"0"}`)
      .then(response => response.json())
      .then(data => {
        onProductsListChange(data.results)
      })
  },[category]);


  return (
    <>
      <ItemList productos={productsList}/>
    </>
  )
}

export default ItemListContainer