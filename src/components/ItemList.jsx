import React from 'react'

function ItemList({productos}) {
  
  console.log(productos)

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      {productos.length == 0
      ? <p>Cargando informacion</p>
      : productos.map((producto,i) => {
        return (
          <article key={i} className='card shadow-md p-4 rounded-md duration-300 transition hover:scale-110 flex flex-col'>
            <h2 className='h-28 text-center'>{producto.title}</h2>
            <h3 className='h-14 text-center'>{`${producto.currency_id} ${producto.price.toLocaleString()}`}</h3>
            <img src={producto.thumbnail} alt={producto.title} />
          </article>
        )
      })
      }
    </section>
  )
}

export default ItemList