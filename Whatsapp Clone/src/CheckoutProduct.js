import React from 'react'
import { useStateValue } from './StateProvider'
import './styles/CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    
    console.log("🔫")
    
    console.log(id, title, image,price, rating)

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={image} alt="/"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>    
                <p className="checkoutProduct_price">
                    <small>💲</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        )
                        )}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
