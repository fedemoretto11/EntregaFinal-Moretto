import '../../styles/style.scss'
import { Link } from 'react-router-dom'
import Rating from '../Widgets/Rating'
import Loader from '../Widgets/Loader'

function ItemDetail({producto}) {

  return (
    !producto
    ? <Loader />
    : (
      <section className='flex justify-center items-center pt-8'>
        <article key={producto.id} className='cardDetail h-[40rem] md:h-[30rem] w-3/4 shadow-md p-4 flex flex-col md:flex-row'>
          <div className='cardDetail__img h-2/6 md:h-full md:w-1/4'>
            <img src={producto.image} alt={producto.title} className='cardDetail__image h-full w-full object-scale-down' />
          </div>
  
          <div className='cardDetail__text flex flex-col h-3/6 w-full md:h-full md:w-2/4 p-2 items-center'>
            <h3 className='cardDetail__text__title pt-2 text-center font-bold md:text-3xl'>{producto.title}</h3>
            <Rating 
              rate={producto.rating.rate}
            />
            <p className='cardDetail__text__price text-start pt-2 md:text-4xl'>{`U$D ${producto.price}`}</p>
            <p className='cardDetail__text__description text-center p-4 text-ellipsis overflow-hidden'>{`${producto.description}`}</p>
          </div>
          
          <div className='cardDetail__btns h-1/6 md:h-2/4 self-center w-full md:w-2/4 lg:w-1/4 flex md:flex-col justify-center gap-6 rounded-md p-2'>
            <div className='cardDetail__btns__cantidad w-2/4 md:w-full flex flex-col md:flex-row justify-between items-center p-1'>
              <label htmlFor="cardDetail__btns__cantidad__label" className='text-sm md:text-md'>Cantidad</label>
              <select className='cardDetail__btns__cantidad__select w-12 text-center' name="cardDetail__btns__cantidad" id="cardDetail__btns__cantidad">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <p className='text-gray-400 text-xs'>{`Stock: 10`}</p>
            </div>
            <div className='cardDetail__btns__container w-2/4 md:w-full flex flex-col items-end justify-around md:gap-4 '>
              <button className='cardDetail__btns__agregarCarrito text-sm rounded md:w-5/6'>Agregar <span className='hidden md:inline'>al Carrito</span></button>
              <button className='cardDetail__btns__volver text-sm rounded p-1 md:px-2'>
                <Link 
                  to={`/cat/${producto.category}`}
                >Volver</Link>
              </button>
            </div>
            
  
          </div>
        </article>
      </section>
    )
  )

}

export default ItemDetail