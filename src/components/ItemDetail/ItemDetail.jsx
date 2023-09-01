import '../../styles/style.scss'
import { Link } from 'react-router-dom'
import Rating from '../Widgets/Rating'
import Loader from '../Widgets/Loader'
import { useContext } from 'react'
import ItemCounter from '../smallComponents/ItemCounter'
import { contexto } from '../Context/ContextComponent'

function ItemDetail({producto}) {

  const {  onAddProduct } = useContext(contexto);
  
  
  const funcionContexto = (producto) => {
    onAddProduct(producto)
  }


  
  return (
    !producto
    ? <Loader />
    : (
      <section className='flex justify-center items-center pt-8 min-h-[40rem]'>
        <article key={producto.id} className='cardDetail min-h-[40rem] lg:min-h-[30rem] w-3/4 shadow-lg p-4 flex flex-col lg:flex-row'>
          <figure className='cardDetail__img h-2/6 lg:h-full lg:w-1/4 self-center'>
            <img src={producto.image} alt={producto.title} className='cardDetail__image h-full w-full object-scale-down' />
          </figure>
  
          <div className='cardDetail__text flex flex-col h-3/6 w-full lg:h-full lg:w-3/4 p-2 items-center'>
            <h3 className='cardDetail__text__title pt-2 text-center font-bold md:text-2xl'>{producto.title}</h3>
            <Rating
              rate={producto.rating}
            />
            <p className='cardDetail__text__price text-start pt-2 lg:text-4xl'>{`$ ${producto.price.toLocaleString()}`}</p>
            <p className='cardDetail__text__description text-center p-4 text-justify'>{`${producto.description}`}</p>
          </div>
          
          <div className='cardDetail__btns h-1/6 lg:h-2/4 self-center w-full lg:w-1/4 lg:w-1/4 flex lg:flex-col justify-center gap-6 rounded-lg p-2'>
            <div className='cardDetail__btns__cantidad w-2/4 lg:w-full flex flex-col lg:flex-row justify-between items-center p-1'>
              <ItemCounter />
              <p className='text-gray-400 text-xs'>{`Stock: ${producto.stock}`}</p>
            </div>
            <div className='cardDetail__btns__container w-2/4 lg:w-full flex flex-col items-end justify-around lg:gap-4 '>
              <button onClick={onAddProduct(producto)} className='cardDetail__btns__agregarCarrito text-sm rounded lg:w-5/6'>Agregar <span className='hidden lg:inline'>al Carrito</span></button>
              <button className='cardDetail__btns__volver text-sm rounded p-1 lg:px-2'>
                <Link 
                  to={`/category/${producto.category}`}
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