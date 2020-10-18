import React from 'react'
import "./styles/Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__">
                    <small>$</small>
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
            <button>Add to basket</button>
        </div>

    )
}

export default Product
