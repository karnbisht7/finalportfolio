import React from 'react';
import { Link } from 'react-router-dom';
import './EcomStyles.css'


const Ecommerce = ({ products , PostCartdata }) => {



  return(
      <div className="god-Ecom">
        <Link to="/cart"><i class="fas fa-shopping-cart shopping-cart"></i></Link>
        <div className='product-father'>{products.map(product=>  (
          <div className='product-container' key={product.itemId}>
            <img src={product.item.images.background} alt="background" />
            <h1 className='product-name'>{product.item.name}</h1>
            <h1 className='product-price'>${product.store.cost}</h1>
            <button onClick={()=>PostCartdata(product)} className='cart-btn'><i className="fas fa-cart-plus cart-icon"></i></button>
          </div>
      ))}
      </div>
      </div> 
  )
};

export default Ecommerce


// { products.data.map(product => {
//   <div className="product-container">
//     <img src={product.item.images.background} />
//     <h1>{product.item.name}</h1>
//     <p>${product.store.cost}</p>
//   </div>
// })}
