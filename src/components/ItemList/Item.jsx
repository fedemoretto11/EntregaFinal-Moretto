import '../../styles/style.scss'
import { Link } from 'react-router-dom'


function Item({producto}) {
  return (
    <article key={producto.id} className='card h-[20rem] shadow-md p-4 duration-300 transition flex flex-col bg-white hover:bg-slate-200'>
      <Link to={`/product/${producto.id}`} className='h-full'>
        <img src={producto.image} alt={producto.title} className='card__image h-4/6 w-full object-contain' />
        <h3 className='card__price h-1/6 text-start pt-2 text-xl'>{`U$D ${producto.price.toLocaleString()}`}</h3>
        <p className='card__description h-1/6 text-start text-ellipsis overflow-hidden'>{producto.title}</p>
      </Link>
    </article>
  )
}

export default Item