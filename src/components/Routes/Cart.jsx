import { useContext, useState } from "react";
import CartList from "../Cart/CartList";
import CartResume from "../Cart/CartResume";
import { contexto } from "../Context/ContextComponent";
import Checkout from "../Cart/Checkout";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Cart() {
  const [isVisible, setIsVisible] = useState(false)
  const items = useContext(contexto);

  const setCheckoutVisibility = () => {
    setIsVisible(!isVisible)
  }


  return (
    <section className="w-screen flex flex-col lg:flex-row gap-12 justify-center items-start pt-8">
      <CartList />
      <CartResume 
        itemsInCart={items.itemsInCart} 
        subtotal={items.subtotal}
        setIsVisible = {setCheckoutVisibility}
      />
      <Checkout 
        isVisible={isVisible}
        setCheckoutVisibility = {setCheckoutVisibility}
      />
    </section>
  )
}
export default Cart