import React from 'react'
import { useStateValue } from './StateProvider'
import './styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/October/Jupiter/ILM_Wave3/Category_ILM_640x45-1._CB418084448_.jpg" alt="add"
            />
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your basket is empty</h2>
                    <p>
                        You are broke af or you are penny pincher. Add something to the basket or gtfo
                    </p>
                </div>
                ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket?.map((item) => (
                        
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))} 
                    
                </div>
            )
            }
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                   
                <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
