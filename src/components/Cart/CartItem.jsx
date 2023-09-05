import { useContext } from "react";
import CartCounter from "../smallComponents/CartCounter"
import { contexto } from "../Context/ContextComponent";


function CartItem({ product }) {
  const { onDeleteProduct } = useContext(contexto);


  return (
    <article className="cart-item-detail p-4 h-28 w-full flex items-center justify-around gap-1"> 
      <img src={product.image} alt={product.title} className="object-contain h-16 w-1/12"/>
      <p className="w-6/12 text-ellipsis overflow-hidden truncate">{product.title}</p>
      <CartCounter 
        product={product}
      />
      <p className="text-lg w-3/12 text-center">{`${(product.price * product.quantity).toLocaleString("es-AR",{style:"currency", currency:"ARS"})}`}</p>
      <i onClick={() => {onDeleteProduct(product)}} className="bi bi-trash3-fill w-1/12"></i>
    </article>
  )
}
export default CartItem