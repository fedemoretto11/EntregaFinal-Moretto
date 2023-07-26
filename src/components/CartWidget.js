import React from 'react'

function CartWidget() {
  return (
    <div className="cart-widget h-full flex justify-center items-center">
      <i class="bi bi-cart text-3xl"></i>
      <span className="text-center cart-count rounded-full bg-red-600 text-sm absolute w-5 h-5 translate-x-4 -translate-y-2">1</span>
    </div>
  )

}

export default CartWidget