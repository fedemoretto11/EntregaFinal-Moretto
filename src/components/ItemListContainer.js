import React from 'react'

function ItemListContainer({nombre, mensajeCompleto}) {
  return (
    <>
      <h2 className='text-center text-3xl m-5'>Buen dia buen señor, su nombre es {nombre}, ¿correcto?</h2>
      <h2 className='text-center text-3xl m-5'>{mensajeCompleto}</h2>
    </>
  )
}

export default ItemListContainer