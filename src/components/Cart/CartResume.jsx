import { Link } from 'react-router-dom'
import '../../styles/style.scss'

function CartResume({totalItems, subtotal}) {


return (
  <aside className="cart-resume w-[90%] mx-5 md:mx-10 lg:mx-0 lg:w-80 h-44 flex flex-col items-center justify-around">
    <h3 className={`cart-resume__tittle text-xl w-[80%] ${totalItems ? '' : 'text-gray-400' }`}>Resumen de compra</h3>
    { 
    totalItems
    ? 
      <>
        <div className="cart-resume__data flex justify-between w-[80%]">
          <p>{`Productos (${totalItems})`}</p>
          <p>{`$ ${subtotal}`}</p>
        </div>
        <button className='cart-resume__btn-comprar px-4 py-2 w-[80%]'>Comprar</button>
      </>
    : 
      <>
        <div className="cart-resume__data flex justify-between w-[80%]">
          <p className='text-gray-400'>Aca verá los importes de los productos</p>
        </div>
        <Link to="/" className='cart-resume__btn-verProductos px-4 py-2 w-[80%] md:w-[50%] lg:w-[80%] text-center'>Ver productos</Link>
      </>
    }
  </aside>
)

}
export default CartResume