import { useContext, useState, useEffect } from "react";
import { contexto } from "../Context/ContextComponent";
import { toast } from "sonner";

function CartCounter({ product }) {
  const { onUpdateQuantity } = useContext(contexto);

  const [newQuantity, setNewQuantity] = useState(product.quantity)

  useEffect(() => {
    onUpdateQuantity(product, newQuantity)
  },[newQuantity])
  

  const add = () => {
    if(newQuantity < product.stock) {
      setNewQuantity(newQuantity + 1)
      onUpdateQuantity(product, newQuantity)
    }
    if (newQuantity >= product.stock) {
      toast.error("No hay stock suficiente",{style: {background : "#ffc107",border: "solid 1px #022859",color: "#022859",fontSize: "13px"}})
    }
  }
  const rest = () => {
    if(newQuantity > 1) {
      setNewQuantity(newQuantity - 1)
      onUpdateQuantity(product, newQuantity)
    }
    if (newQuantity == 1) {
      toast.error("La cantidad no puede ser 0",{style: {background : "#ffc107",border: "solid 1px #022859",color: "#022859",fontSize: "13px"}})
    } 
  }

  return (
    <div className="cart-counter h-8 w-2/12 flex justfy-center items-center px-2">
      <button onClick={() => rest()} className="cart-counter__rest w-[30%] h-full text-center">-</button>
      <p className="cart-counter__total text-lg w-[40%] h-full text-center">{newQuantity}</p>
      <button onClick={() => add()} className="cart-counter__sum w-[30%] h-full text-center">+</button>
    </div>
  )
}
export default CartCounter