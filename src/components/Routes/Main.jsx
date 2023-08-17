import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemList/ItemListContainer'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import Error404 from '../Mensajes/Error404'

function Main() {


  return (
    <main id='main' className='min-h-screen'>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/cat/:id' element={<ItemListContainer/>}></Route>
        <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </main>
  )
}

export default Main