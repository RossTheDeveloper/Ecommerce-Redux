import C from './constants'
import { combineReducers } from 'redux'

// cart -check if already contained, edit amount if is
//make sure remove working.


export const cart = (state=[], action) => {
  switch(action.type) {

      case C.ADD_TO_CART :
        const hasProduct = state.some((x)=> x.cartId === action.payload.cartId)
        	if(hasProduct){
               state.forEach(x => {
                 if(x.cartId === action.payload.cartId){
                   x.qty = Number(x.qty) + Number(action.payload.qty)
                 }
               })
               
          } else {
              return [
                 ...state,
                 action.payload
              ]
          }

      case C.REMOVE_FROM_CART :
        return state.filter((prod) => prod.cartId !== action.payload)
    	default:
    		return state
    }
}

export const products = (state=[]) => state






export default combineReducers({
  cart,
  products
})
