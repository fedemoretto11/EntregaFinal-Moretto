import { useContext } from "react"
import { contexto } from "../Context/ContextComponent"
import CartItem from "./CartItem";

function CartList() {

  const items = useContext(contexto);
  console.table(items.products)


  return (
    <section className="cart-list flex flex-col mb-8 mx-5 md:mx-10 lg:mx-0 min-h-[11rem] w-[90%] lg:w-[55%]">
      { items.productsInCart.map((product) => {
        return (
        <CartItem 
          key={product.id}
          product={product}
        />
        )
      })}
    </section>
    
  )
}
export default CartList