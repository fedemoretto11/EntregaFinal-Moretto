import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider


function ContextComponent(props) {

  // const cartLocalStorage = localStorage.getItem("cart")

  // const [counter, setCounter] = useState(0);
  // const [subtotal, setSubtotal] = useState(0)
  const [products, setProducts] = useState([])
  const [items, setItems] = useState(0)

  const productsFilter = (newProduct) => {
    return products.find(product => product.id == newProduct.id) ? true : false
  }

  const addProduct = (newProduct) => {
    if(!productsFilter(newProduct)) {
      setProducts([...products, newProduct])
      setItems(items + 1)
      console.log("Producto agregado")
    } else {
      console.log("El producto se encuentra en el carrito")
    }
  }



  const contextObject = {
    products: products,
    items : items,
    subtotal: 0,
    onAddProduct: (newProduct) => {
      addProduct(newProduct)
    },
  }





  return (
    <Provider 
      value={ contextObject }
    >
      {props.children}
    </Provider>
  )
}
export default ContextComponent