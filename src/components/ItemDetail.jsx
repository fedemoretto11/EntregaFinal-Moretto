import React from 'react'
import '../styles/Item.scss'
function ItemDetail({producto}) {


if(producto) {
  return (
    <section className='flex justify-center items-center pt-4'>
      <article key={producto.id} className='cardDetail h-[30rem] w-3/4 shadow-md p-4 rounded-md duration-300 transition flex flex-col md:flex-row bg-white hover:bg-slate-50'>
        <div className='cardDetail__img h-1/4 md:h-full md:w-1/4'>
          <img src={producto.image} alt={producto.title} className='cardDetail__image h-full w-full object-scale-down' />
        </div>
        <div className='cardDetail__text flex flex-col h-2/4 w-full md:h-full md:w-2/4 p-2 items-center'>
          <h2 className='cardDetail__text__title pt-2 text-center md:text-3xl'>{producto.title}</h2>
          <p className='cardDetail__text__rate'>{`${producto.rating.rate} stars`}</p>
          <h3 className='cardDetail__text__price text-start pt-6 md:text-4xl'>{`U$D ${producto.price}`}</h3>
          <p className='cardDetail__text__description text-center p-4 text-ellipsis overflow-hidden hidden md:block'>{`${producto.description}`}</p>
        </div>
        <div className='cardDetail__btns md:w-2/4 lg:w-1/4 flex flex-col justify-center gap-6 rounded-md p-2'>
          <div className='cardDetail__btns__cantidad flex flex-col md:flex-row justify-between items-center '>
            <label htmlFor="cardDetail__btns__cantidad__label" className='text-sm md:text-md'>Cantidad</label>
            <select className='cardDetail__btns__cantidad__select w-8 text-center' name="cardDetail__btns__cantidad" id="cardDetail__btns__cantidad">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className='text-gray-400 text-xs'>{`Stock: 10`}</p>
          </div>
          <button className='cardDetail__btns__agregarCarrito rounded-md'>Agregar al Carrito</button>
        </div>
      </article>
    </section>
  )
}


  
}

export default ItemDetail