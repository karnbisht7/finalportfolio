import React from 'react'
import './CartStyles.css'

function Cart({cartItems , addToCart , removeFromCart , itemsPrice}) {

    console.log(cartItems)


    return (
        <div className="main-container">
            <div className='cart-father'>
               { cartItems.length ===0 ? (<h1 className="flex-centered">CART IS EMPTY !</h1>) : (cartItems.map(product=>  (
                <div className='cart-container' key={product.itemId}>
                  <img src={product.item.images.icon} alt="product-icon" />
                  <h1 className='cart-name flex-centered'>{product.item.name}</h1>
                  <h1 className='cart-price flex-centered'>${product.store.cost}</h1>
                  <h1 className='cart-price flex-centered'>Quantity :</h1>
                <div className="quantity-buttons flex-centered">
                    <button onClick={()=> removeFromCart(product)} >-</button>{product.qty}<button onClick={()=> addToCart(product)} >+</button>
                </div>
              </div>
                )))}
            </div>
            <div className="cart-summary">
                <header className="flex-centered">Summary</header>
                <div className="summary-items">
                {cartItems.map(product=>  (
                <div className='summaryItems-container' key={product.itemId}>
                  <h1 className='summaryItems-name '>{product.item.name}</h1>
                  <h1 className='summaryItems-price '>{product.qty} X ${product.store.cost}</h1>
                </div>
                ))}
                </div>
                <div className="summaryItem-checkout">
                  <div className="total-price flex-centered" >Total - ${itemsPrice}</div>
                  <div className="flex-centered">
                    <button  >Checkout</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
