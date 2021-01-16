import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state={cartItems:[]}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log(item)
            const existItem = state.cartItems.find(x=> x.product === item.product)
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map( x => x.product === existItem.product ? item: x)
                }
            } else {
                return  {...state, cartItems: [...state.cartItems, item]}
            }
        case CART_REMOVE_ITEM:
            console.log(`🔫🔫state🔫🔫${action.payload}`)
            return {
                ...state,
                cartItems: state.cartItems.filter((id) => id.product !== action.payload),
                
            };
            
        default:
            return state;
    }
}
