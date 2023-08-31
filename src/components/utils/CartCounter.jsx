
function CartCounter({ quantity }) {



  return (
    <div className="cart-counter h-8 w-28 flex justfy-center items-center px-2">
      <button className="cart-counter__rest w-[30%] h-full text-center">-</button>
      <p className="cart-counter__total w-[40%] h-full text-center">{quantity}</p>
      <button className="cart-counter__sum w-[30%] h-full text-center">+</button>
    </div>
  )
}
export default CartCounter