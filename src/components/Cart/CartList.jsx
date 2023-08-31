import { useContext } from "react"
import { contexto } from "../Context/ContextComponent"
import CartItem from "./CartItem";

function CartList() {

  const items = useContext(contexto);
  console.log(items.products)


  return (
    <section className="cart-list flex flex-col mx-5 md:mx-10 lg:mx-0 min-h-[11rem] w-[90%] lg:w-[55%]">
      { items.products.map((prod) => {
        return (
        <CartItem 
          key={prod.id}
          product={prod}
        />
        )
      })}
    </section>
    
  )
}
export default CartList