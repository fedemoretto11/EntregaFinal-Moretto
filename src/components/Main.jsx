import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

function Main() {
  const [listaProductos, setListaProductos] = useState([]);
  const [producto, setProducto] = useState([]);





  return (
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/cat/:id' element={<ItemListContainer 
          listaProductos={listaProductos}
          onSetProductos={setListaProductos}
        />}></Route>
        <Route path='/product/:id' element={<ItemDetailContainer 
          listaProductos={listaProductos}
          producto={producto}
          onSetProducto={setProducto}
        />}></Route>
        <Route path='*' element={<p>Error 404 Not Found</p>}></Route>
      </Routes>
    </main>
  )
}

export default Main