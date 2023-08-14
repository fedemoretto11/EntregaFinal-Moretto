import React from 'react'
import '../styles/ItemList.scss'
import { Link } from 'react-router-dom'

function ItemList({productos}) {

  
  // console.log(productos)

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 p-6' >
      {productos.length == 0
      ? <p>Cargando informacion...</p>
      : productos.map((producto) => {
        return (
          <article key={producto.id} className='card h-[28rem] shadow-md p-4 rounded-md duration-300 transition flex flex-col bg-white'>
            <img src={producto.thumbnail} alt={producto.title} className='card__image h-2/6 w-full object-contain' />
            <h3 className='card__price h-1/6 text-start text-2xl'>{`${producto.currency_id} ${producto.price.toLocaleString()}`}</h3>
            <h2 className='card__description h-2/6 pt-2 text-start'>{producto.title}</h2>
            <button className='card__btn h-8 w-32 px-4 border-solid self-center rounded-md'>
              <Link to={`/product/${producto.id}`}>Ver Detalle</Link>
            </button>
          </article>
        )
      })
      }
    </section>
  )
}

export default ItemList