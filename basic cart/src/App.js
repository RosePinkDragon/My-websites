import React, { useState } from 'react';

import Cell from './imgs/aa cell.jpg'
// import Bary from './imgs/aa cell.jpg'

import './App.css';

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'


function App() {

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: 'AA Battery',
      cost: '$2.99',
    },
    {
      name: 'Blanket',
      cost: '$20.99',
    },
    {
      name: 'Friuti',
      cost: '$12.99',
    },
    {
      name: 'vada',
      cost: '$22.99',
    },
  ])
  
  const addToCart = (product) => {
    setCart([...cart, {...product}])
  }

  const navToCart = (nextPage) => {
    setPage(nextPage)
  }

  const remFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  }
 
  const renderProducts = () => {
    return (
      <>
          <h1>Products</h1>
      
          <div className="wrap">
      
      {
        products.map((product, index) => (
          
          <div className="innerwrap" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={Cell} alt=""/>
            <button onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
          
        ))
      }
      </div>
      </>
    )
  }

  const renderCart = () => {

    console.log(cart);

    return (
      <>
          <h1>Cart</h1>
      
          <div className="wrap">
      
      {
        
        cart.map((product, index) => (
          
          <div className="innerwrap" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={Cell} alt=""/>
            <button onClick={() => remFromCart(product)}>
              Remove
            </button>
          </div>
          
        ))
      }
      </div>
      </>
    )
  }

  return (
    <div className="App" id="root">

      <header>
        <button onClick={()=>navToCart(PAGE_CART)}>Go to Cart({cart.length})</button>
        <button onClick={()=>navToCart(PAGE_PRODUCTS)}>Go to product</button>
      </header>

      {page===PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
      
    
    </div>
  );
}

export default App;
