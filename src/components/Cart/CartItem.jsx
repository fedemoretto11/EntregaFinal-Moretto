import CartCounter from "../smallComponents/CartCounter"


function CartItem({product}) {



  return (
    <article className="cart-item-detail p-4 h-28 w-full flex items-center justify-around gap-4"> 
      <img src={product.image} alt={product.title} className="h-16"/>
      <p className="w-72">{product.title}</p>
      <CartCounter 
        quantity={product.quantity}
      />
      <p className="text-xl">{`U$D ${product.price}`}</p>
      <i className="bi bi-trash3-fill"></i>
    </article>
  )
}
export default CartItem