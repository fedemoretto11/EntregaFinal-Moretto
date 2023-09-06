import { useContext, useRef, useState } from "react"
import { contexto } from "../Context/ContextComponent";
import CartResume from "./CartResume";
import '../../styles/style.scss'
import { toast } from "sonner";

function Checkout( ) {
  const { onSellAndSave, saleToken, itemsInCart, subtotal } = useContext(contexto)

  const nameInput = useRef()
  const emailInput = useRef()
  const addressInput = useRef()
  const [isSold, setIsSold] = useState(false)

  const concludeSale = async (e) => {
    e.preventDefault()
    if(nameInput.current.value == "" && emailInput.current.value == ""){
      toast.error("Campos de nombre y correo no pueden estar vacios", {style: {background : "#dc3545",border: "solid 1px #022859",color: "#fff",fontSize: "13px"}})
      return;
    } else {
      try {
        await onSellAndSave(nameInput.current.value, emailInput.current.value)
        setIsSold(true)
      } catch(error) {
        toast.error("Error al vender", {style: {background : "#dc3545",border: "solid 1px #022859",color: "#fff",fontSize: "13px"}})
      } finally {
      }
    }
  }

  return (
    <section className="w-screen flex flex-col lg:flex-row gap-12 justify-center items-start pt-8">
      <form id="checkout-form" className="checkout flex flex-col mb-8 mx-5 p-10 pt-6 md:mx-10 lg:mx-0 min-h-[10rem] w-[90%] lg:w-[55%]">
        {
          isSold 
          ?
            <>
              <h3 className="checkout__title text-2xl text-center">Super Music Changuito le agradece por su compra</h3>
              <p className="checkout__title text-md mt-6 text-center">Id de la compra: <span>{saleToken}</span></p>
            </>
          : 
          <>
            <h3 className="checkout__title text-2xl text-center">Ingrese los siguentes datos para finalizar</h3>
            <input type="text" placeholder="Nombre" required ref={nameInput} className="checkout__input p-4 h-14 w-full flex items-center justify-around gap-1" />
            <input type="email" placeholder="Email" required ref={emailInput} className="checkout__input p-4 h-14 w-full flex items-center justify-around gap-1" />
            <input type="text" placeholder="Direccion" ref={addressInput} className="checkout__input p-4 h-14 w-full flex items-center justify-around gap-1" />
            </>
        }
        
      </form>
      <CartResume 
        itemsInCart={itemsInCart} 
        subtotal={subtotal}
        onConcludeSale={concludeSale}
        isSold={isSold}
      />
    </section>
  )
}
export default Checkout