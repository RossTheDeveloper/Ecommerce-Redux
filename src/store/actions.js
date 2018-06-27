import C from './constants'


export function addToCart(product) {

    return {
        type: C.ADD_TO_CART,
        payload: product
    }

}

export const removeFromCart = id =>
    ({
        type: C.REMOVE_FROM_CART,
        payload: id
    })
