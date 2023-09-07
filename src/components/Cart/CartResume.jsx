import { Link, useLocation } from 'react-router-dom'
import '../../styles/style.scss'

function CartResume({itemsInCart, subtotal, onConcludeSale, isSold}) {
  
  const path = useLocation()

  return (
      <aside className={`cart-resume mb-6 w-[90%] mx-5 md:mx-10 lg:mx-0 lg:w-80 ${path.pathname == '/cart' ? "h-60" : "h-60"} flex flex-col items-center justify-around`}>
        <h3 className={`cart-resume__tittle text-xl w-[80%] ${itemsInCart ? '' : 'text-gray-400' }`}>{`${isSold ? "Gracias por su compra" : "Resumen de compra"}`}</h3>
        { 
        itemsInCart
        ? 
          <>
            <div className="cart-resume__data flex justify-between w-[80%]">
              <p>{`Productos (${itemsInCart})`}</p>
              <p>{`${subtotal.toLocaleString("es-AR",{style:"currency", currency:"ARS"})}`}</p>
            </div>
            {
            path.pathname == '/cart' ?
              <>
                <Link to="/cart/checkout" className='cart-resume__btn-comprar px-4 py-2 w-[80%] text-center'>Comprar</Link>
                <Link to="/" className='cart-resume__btn-inicio px-1 py-1 w-[55%] text-center'>Seguir comprando</Link>
              </>
            : 
              <>
                <button type="submit" form='checkout-form' onClick={onConcludeSale} className={`cart-resume__btn-comprar px-4 py-2 w-[80%] text-center`}>Comprar</button>
                <Link to="/cart" className='cart-resume__btn-volver w-[40%] text-center px-1 py-0.5'>Volver</Link>
              </>
            }
            
          </>
        : 
          <>
            <div className="cart-resume__data flex justify-between w-[80%]">
              <p className='text-gray-400'>{`${isSold ? "Click abajo para volver al inicio" : "Aca verá los importes de los productos"}`}</p>
            </div>
            <Link to="/" className={`cart-resume__btn-verProductos px-4 py-2 w-[80%] md:w-[50%] lg:w-[80%] text-center ${isSold ? "sold" : ""}`}>Ver productos</Link>
          </>
        }
      </aside>
    )
}
export default CartResume