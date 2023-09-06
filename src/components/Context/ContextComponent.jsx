import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { db } from "../database/Data";
import Checkout from "../Cart/Checkout";

export const contexto = createContext();
const Provider = contexto.Provider

function ContextComponent(props) {

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
    let number = parseFloat(q)
    setCounter(number)
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
    const productsSold = productsInCart.map((product) => {
      return {id:product.id, quantity:product.quantity, pricePerItem:product.price, subtotalProduct:product.quantity*product.price}
    })
    const sale = {
      user: {
        name: name,
        email: email
      },
      date: serverTimestamp(),
      products: [...productsSold],
      subtotal: subtotal,
      itemsInCart: itemsInCart
    }

    const saleDone = addDoc(salesCollection, sale)

    toast.promise(saleDone, {
      loading: "Realizando compra, espere por favor...",
      success: (resultado) => {
        setSaleToken(resultado.id)
        setProductsInCart([])
        localStorage.setItem("cart", JSON.stringify([]));
        return "Venta realizada"
        },
      error: (error) => {
        console.log(error)
        return "Error en venta"
        }
    })
  }

  useEffect(() => {
    let newSubtotal = 0
    let newQuantity = 0
    productsInCart.forEach(product => {
      newSubtotal += product.price * product.quantity
      newQuantity += product.quantity
    });
    setSubtotal(newSubtotal)
    setItemsInCart(newQuantity)
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
    saleToken: saleToken,
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