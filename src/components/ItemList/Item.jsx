import '../../styles/style.scss'
import { Link } from 'react-router-dom'


function Item({producto}) {
  return (
    <article key={producto.id} className='card h-[20rem] shadow-md p-4 rounded-md duration-300 transition flex flex-col bg-white hover:bg-slate-50'>
      <Link to={`/product/${producto.id}`} className='h-full'>
        <img src={producto.image} alt={producto.title} className='card__image h-2/6 w-full object-contain' />
        <h3 className='card__price h-2/6 text-start pt-12 text-2xl'>{`U$D ${producto.price.toLocaleString()}`}</h3>
        <h2 className='card__description h-2/6 pt-2 text-start text-ellipsis overflow-hidden'>{producto.title}</h2>
      </Link>
    </article>
  )
}

export default Item