import { TextRotateVerticalOutlined } from '@material-ui/icons'
import React from 'react'
import { useStateValue } from './StateProvider'
import "./styles/Product.css"

function Product({ id, title, image, price, rating }) {

    const [{}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__">
                    <small>💲</small>
                    <strong className="product__price">{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>👍</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="none" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>

    )
}

export default Product
