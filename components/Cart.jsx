/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import Link from 'next/link'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'

import { useStateContext } from '@/context/StateContext' // context
import { urlFor } from '@/lib/client' // sanity image url
import getStripe from '@/lib/getStripe' // stripe

export default function Cart() {
  const cartRef = useRef()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    removeCartItem,
  } = useStateContext()

  // STRIPE CHECKOUT
  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })

    if (response.statusCode === 500) return

    const data = await response.json()

    toast.loading('Redirecting to checkout...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div>
      <div className='cart-wrapper' ref={cartRef}>
        <div className='cart-container'>
          {/* CART HEADING */}
          <button
            type='button'
            className='cart-heading'
            onClick={() => setShowCart(false)}
          >
            <AiOutlineLeft />
            <span className='heading'>Your Cart</span>
            <span className='cart-num-items'>({totalQuantities} items)</span>
          </button>

          {/* EMPTY CART */}
          {cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={150} />
              <h3>Sorry, Your shopping bag is empty</h3>
              <Link href='/'>
                <button
                  type='button'
                  onClick={() => setShowCart(false)}
                  className='btn'>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          {/* CART WITH ITEMS */}
          <div className='product-container'>
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className='product' key={item._id}>
                  <img
                    src={urlFor(item?.image[0])}
                    alt='cart item'
                    className='cart-product-image'/>
                  <div className='item-desc'>
                    <div className='flex top'>
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className='flex bottom'>
                      <div>
                        <p className='quantity-desc'>
                          <span
                            className='minus'
                            onClick={() =>
                              toggleCartItemQuantity(item._id, 'dec')
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className='num'>{item.quantity}</span>
                          <span
                            className='plus'
                            onClick={() =>
                              toggleCartItemQuantity(item._id, 'inc')
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type='button'
                        className='remove-item'
                        onClick={() => removeCartItem(item._id)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>Subtotal</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className='btn-container'>
                {/* STRIPE CHECKOUT BUTTON */}
                <button type='button' className='btn' onClick={handleCheckout}>
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
