import React from 'react'

function ItemDetail({producto}) {

console.log(producto)




  return (
    <div className='flex justify-center align-center p-4'>
      <article key={producto.id} className='card h-[28rem] w-80 shadow-md p-4 rounded-lg flex flex-col bg-white border-2 border-double border-blue-800'>
        <img src={producto.thumbnail} alt={producto.title} className='card__image h-2/6 w-full object-contain' />
        <h3 className='card__price h-1/6 text-start text-2xl'>{`${producto.currency_id} ${producto.price.toLocaleString()}`}</h3>
        <h2 className='card__description h-2/6 pt-2 text-start'>{producto.title}</h2>
      </article>
    </div>
  )
}

export default ItemDetail