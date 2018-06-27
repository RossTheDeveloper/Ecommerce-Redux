import C from './constants'
import { combineReducers } from 'redux'

// cart -check if already contained, edit amount if is
//make sure remove working.


export const cart = (state=[], action) => {
  switch(action.type) {

      case C.ADD_TO_CART :
      	return [
           ...state,
           action.payload
      	]

      case C.REMOVE_FROM_CART :
        return state.filter((prod) => prod.id !== action.payload)
    	default:
    		return state
    }
}

export const products = (state=[]) => state






export default combineReducers({
  cart,
  products
})
