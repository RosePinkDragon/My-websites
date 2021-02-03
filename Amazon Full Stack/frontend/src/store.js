import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';
import { orderCreateReducer, orderDetailsReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers';

const initialState ={
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [],
        amazonShippingAddress: localStorage.getItem('amazonShippingAddress')? JSON.parse(localStorage.getItem('amazonShippingAddress')) : {},
        paymentMethod: 'PayPal',
    },
    userSignin: {
        userInfo: localStorage.getItem('amazonUserInfo')? JSON.parse(localStorage.getItem('amazonUserInfo')) :null
    },
    
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
