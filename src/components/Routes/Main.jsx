import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemList/ItemListContainer'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'

function Main() {






  return (
    <main className='min-h-screen'>
      <Routes>
        <Route 
          path='/' 
          element={<ItemListContainer />}
        ></Route>
        <Route 
          path='/cat/:id' 
          element={<ItemListContainer/>}
        ></Route>
        <Route 
          path='/product/:id' 
          element={<ItemDetailContainer/>}
        ></Route>
        <Route 
          path='*' 
          element={<p>Error 404 Not Found</p>}
        ></Route>
      </Routes>
    </main>
  )
}

export default Main