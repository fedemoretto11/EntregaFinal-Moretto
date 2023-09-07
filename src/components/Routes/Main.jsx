import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemList/ItemListContainer'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import Error404 from '../Mensajes/Error404'
import Cart from '../Cart/Cart'
import Checkout from '../Cart/Checkout'


function Main() {
  return (
    <main id='main'>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:id' element={<ItemListContainer/>}></Route>
        <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cart/checkout' element={<Checkout />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </main>
  )
}

export default Main