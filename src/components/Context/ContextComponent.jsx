import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { db } from "../database/Data";

export const contexto = createContext();
const Provider = contexto.Provider


function ContextComponent(props) {

  // const cartLocalStorage = localStorage.getItem("cart")

  const [counter, setCounter] = useState(1);
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [subtotal, setSubtotal] = useState(0)
  const [itemsInCart, setItemsInCart] = useState(0)
  const [saleToken, setSaleToken] = useState("")


  const productsFilter = (newProduct) => {
    return productsInCart.find(product => product.id == newProduct.id)
  }

  const updateQuantity = (product, newQuantity) => {
    const productToUpdate = productsFilter(product)
    if(productToUpdate) {
      productToUpdate.quantity = newQuantity
      const productsUpdated = [...productsInCart]
      const productIndex = productsUpdated.findIndex((product) => product.id === productToUpdate.id);
      if(productIndex != -1) {
        productsUpdated[productIndex] = productToUpdate
        setProductsInCart(productsUpdated)
      }
      localStorage.setItem("cart", JSON.stringify(productsUpdated))
    }
  }

  const setQuantity = (q) => {
    setCounter(q)
  }
  
  const addProduct = (newProduct) => {
    if(productsFilter(newProduct)) {
      toast.error("Producto ya se encuenta en carrito",{style: {background : "#ffc107",border: "solid 1px #022859",color: "#022859",fontSize: "13px"}})
    } else if (!productsFilter(newProduct) && newProduct.stock < counter) {
      toast.error("Producto sin Stock disponible", {style: {background : "#dc3545",border: "solid 1px #022859",color: "#fff",fontSize: "13px"}})
    } else {
      setProductsInCart([...productsInCart, {...newProduct, quantity: counter}])
      setQuantity(1);
      localStorage.setItem("cart", JSON.stringify([...productsInCart, { ...newProduct, quantity: counter }]));
      toast.success("Producto agregado correctamente", {style: {background : "#198754",border: "solid 1px #022859",color: "#fff",fontSize: "13px"}})

    }
  }

  const deleteProduct = (productToDelete) => {
    if(productsFilter(productToDelete)) {
      setProductsInCart(productsInCart.filter((product) => {
        return product.id != productToDelete.id
      }))
      localStorage.setItem("cart", JSON.stringify(productsInCart.filter((product) => product.id !== productToDelete.id)));
      toast.error("Producto eliminado del carrito", {style: {background : "#dc3545",border: "solid 1px #022859",color: "#fff",fontSize: "13px"}})}
  }

  const sellAndSave = (name, email) => {
    const salesCollection = collection(db, "ventas")
    const sale = {
      user: {
        name: name,
        email: email
      },
      date: serverTimestamp(),
      products: [...productsInCart]
    }

    const saleDone = addDoc(salesCollection, sale)
    saleDone
      .then((resultado) => {
          console.log("Venta realizada correctamente")
          console.log(resultado)
          setSaleToken(resultado.id)
          setProductsInCart([])
          localStorage.setItem("cart", JSON.stringify([]));
      })
      .catch((error) => {
          console.log(error)
          console.log("Error de carga")
      })
  }



  useEffect(() => {
    let newSubtotal = 0
    productsInCart.forEach(product => {
      newSubtotal += product.price * product.quantity
    });
    setSubtotal(newSubtotal)
    setItemsInCart(productsInCart.length)
  },[productsInCart])






  const contextObject = {
    productsInCart: productsInCart,
    itemsInCart : itemsInCart,
    subtotal: subtotal,
    onSetQuantity: (q) => {
      setQuantity(q)
    },
    onAddProduct: (newProduct) => {
      addProduct(newProduct)
    },
    onDeleteProduct: (productToDelete) => {
      deleteProduct(productToDelete)
    },
    onUpdateQuantity: (product, newQuantity) => {
      updateQuantity(product, newQuantity)
    },
    onSellAndSave: (name, email) => {
      sellAndSave(name, email)
    },
    saleToken: saleToken
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