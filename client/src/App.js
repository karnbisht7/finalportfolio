import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home';
import About from './components/About';
import Ecommerce from './components/Ecom/Ecommerce';
import Elearning from './components/Elearning/Elearning';
import Resume from './components/Resume/Resume';
import Cart from './components/cart/Cart';
import Signup from './components/Signup/Signup';
import Community from './components/community/Community';





const Routing = ()=> {

  useEffect(()=> {
    fetchProducts()
  } , [])


  const [ products , setProducts ] = useState([])
  const [ cartItems , setCartItems ] = useState([])

  const itemsPrice = cartItems.reduce( ( a , c ) => a + c.store.cost * c.qty , 0 )

  const addToCart = (product) => {
    const doesExist = cartItems.find( x => x.itemId === product.itemId)

    if(doesExist) {
      setCartItems ( cartItems.map( x => x.itemId===product.itemId ? {...doesExist , qty:doesExist.qty + 1 }
         :
         x
         ) )
    } else {
      setCartItems([...cartItems , {...product , qty : 1}])
    }
  }

  const removeFromCart = (product) => {
    const doesExist = cartItems.find( x => x.itemId === product.itemId)

    if(doesExist.qty===1) {
      setCartItems ( cartItems.filter( x => x.itemId!==product.itemId ) )
    } else {
      setCartItems(
        cartItems.map(x => x.itemId === product.itemId ? {...doesExist , qty:  doesExist.qty -1} : x )
      )
  }
}
 
  const fetchProducts = () => {
    fetch('https://fortnite-api.theapinetwork.com/store/get')
    .then(res=> res.json())
    .then((data) => {
      console.log(data)
      setProducts(data.data)
      console.log(products)
    }).catch(err=> {
      console.log(err)
    })
  }

  const PostCartdata = (product) => {
    fetch( "/ecommerce" , { 
      method: "post" , 
      headers: {
        "Content-Type":"application/json"
      } ,
      body:JSON.stringify({
        name : product.item.name ,
        cost : product.store.cost ,
        itemId : product.itemId ,
        image : product.item.images.icon
      })    
    })
    .then(data=>{
      console.log(data)
    })
    .catch(err=> {
      console.log(err)
    })


    
  }


  return(
    <Switch>
       <Route exact path="/community" >
          <Community />
      </Route>
      <Route exact path="/login" >
          <Login />
      </Route>
      <Route exact path="/signup" >
          <Signup />
      </Route>
      <Route exact path="/" exact >
          <Home />
      </Route>
      <Route exact path="/About" >
          <About />
      </Route>
      <Route exact path="/ecommerce" >
          <Ecommerce products={products}
                     PostCartdata={PostCartdata} />
      </Route>
      <Route exact path="/Elearning" >
          <Elearning />
      </Route>
      <Route exact path="/Resume" >
          <Resume />
      </Route>
      <Route exact path="/Cart" >
          <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} itemsPrice={itemsPrice} />
      </Route>
    </Switch>
  )
}


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
