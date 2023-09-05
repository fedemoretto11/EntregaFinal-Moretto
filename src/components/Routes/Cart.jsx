import { useContext } from "react";
import CartList from "../Cart/CartList";
import CartResume from "../Cart/CartResume";
import { contexto } from "../Context/ContextComponent";

function Cart() {

  const items = useContext(contexto);

  return (
    <section className="w-screen flex flex-col lg:flex-row gap-12 justify-center items-start pt-8">
      <CartList />
      <CartResume 
        itemsInCart={items.itemsInCart} 
        subtotal={items.subtotal}
      />
    </section>
  )
}
export default Cart