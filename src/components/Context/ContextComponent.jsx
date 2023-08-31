import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider


function ContextComponent(props) {

  const cartLocalStorage = localStorage.getItem("cart")

  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([])
  const [items, setItems] = useState(0)
  const [subtotal, setSubtotal] = useState(0)



  const contextObject = {
    products: [],
    items : 0,
    subtotal: 0,
    unaFuncion: () => {
      console.log("hola")
    }
  }

  const findProduct = () => {

  }





  return (
    <Provider 
      value={contextObject}
    >
      {props.children}
    </Provider>
  )
}
export default ContextComponent