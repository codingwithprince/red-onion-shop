import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions'


const initialState = {
    cart : []
}

export const cartReducer = (state = initialState, action) =>{
    switch ( action.type){
        case ADD_TO_CART :
            return {
                cart : [...state.cart, action.item]
            }
            case REMOVE_FROM_CART :
                const remainingCart = state.cart.filter( item => item.id != action.id)
                return {
                    cart: remainingCart
                }
                default:
                    return state;
    }
}