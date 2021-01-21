import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const initialState ={
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [],
    },
    userSignin: {
        userInfo: localStorage.getItem('amazonUserInfo')
        ? JSON.parse(localStorage.getItem('amazonUserInfo'))
        :null
    },
    
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
