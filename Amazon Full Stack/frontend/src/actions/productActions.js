import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async (dispact) => {
    dispact({
        type:PRODUCT_LIST_REQUEST
    });
    try{
        const {data} = await axios.get('/api/products');
        dispact({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch(error) {
        dispact({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}