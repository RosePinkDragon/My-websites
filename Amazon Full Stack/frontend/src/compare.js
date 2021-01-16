
import React, { useEffect } from "react";
import { addToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search 
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart)
    const cartItems = cart;
    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch, productId, qty])



    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.leghth === 0 ? ( 
                <MessageBox>
                    Cart Is Empty. <Link to="/">Go Shopping</Link>
                </MessageBox> ) : (
                    <ul>
                        {cartItems.map((item) => (
                          <li key={item.product}>
                              hiii
                          </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}


