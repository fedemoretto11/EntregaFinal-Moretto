import { useContext, useRef, useState } from "react"
import { contexto } from "../Context/ContextComponent";


function Checkout( { isVisible, setCheckoutVisibility } ) {

  const [isSold, setIsSold] = useState(false);

  const { onSellAndSave, saleToken } = useContext(contexto)

  const nameInput = useRef()
  const emailInput = useRef()

  const concludeSale = (e) => {
    e.preventDefault()
    setIsSold(!isSold)
    onSellAndSave(nameInput.current.value, emailInput.current.value)
  }









  return (
    <section className={`checkout w-[50rem] h-[22rem] ${isVisible ? "visible" : "invisible"} absolute top-44 p-4 flex flex-col justify-center items-center`}>

      {
        !isSold
        ?
          <>
            <h2 className="checkout__titulo text-2xl text-center">Complete los datos para finalizar</h2>
            <form action="" className="checkout__form w-full p-3 mt-6 flex flex-col justfy-center items-center gap-8">
              <div className="checkout__form__inputContainer w-5/6 grid grid-cols-2 gap-6">
                <input type="text" placeholder="Nombre *" ref={nameInput} required />
                <input type="email" placeholder="Email *" ref={emailInput} required />
              </div>
              <button onClick={concludeSale} type="submit" className="checkout__form__btnContainer__btnSubmit w-72 h-10">Finalizar Compra</button>
              <button onClick={setCheckoutVisibility} className="checkout__form__btnContainer__btnBack w-40 h-9">Volver</button>
            </form>
          </>
        : 
          <>
            <h2 className="checkout__titulo text-2xl text-center">Compra finalizada con exito</h2>
            <p>{`Codigo de venta: ${saleToken}`}</p>
            <form action="" className="checkout__form w-full p-3 mt-6 flex flex-col justfy-center items-center gap-8">
              <div className="checkout__form__done flex justify-center items-center w-72 h-10 text-3xl">
                <i className="bi bi-check2-circle"></i>
              </div>
              <button onClick={setCheckoutVisibility} className="checkout__form__btnContainer__btnBack w-40 h-9">Volver</button>
            </form>


          </>

      }

      




    </section>
  )
}
export default Checkout