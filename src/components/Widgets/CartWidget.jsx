import { useContext } from "react"
import { contexto } from "../Context/ContextComponent"

function CartWidget() {
  const items = useContext(contexto)
  // Estados


  // Accion
  const toggleCart = () => {
    console.log("Hola")
  }


  // Vista
  return (
    <div className="flex cart-widget h-full  justify-center items-center">
      <i onClick={toggleCart} className="bi bi-cart text-3xl"></i>
      <span className={`${items.items ? "absolute" : "hidden"} text-center cart-count rounded-full bg-red-600 text-sm absolute w-5 h-5 translate-x-4 -translate-y-3 md:translate-x-4 md:-translate-y-3`}>{items.items < 100 ? items.items : "9+"}</span>
    </div>
  )

}

export default CartWidget