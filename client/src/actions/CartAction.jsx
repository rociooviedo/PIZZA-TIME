export const addToCart = (pizza, quantity, varient) => (dispatch, getState)=>{

    var carItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    }

    if (carItem.quantity>10){
        alert('You cannot add more than  10 quantities')
    }
    else{
        if(carItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART', payload:pizza})
        }
        else{
            dispatch({type:'ADD_TO_CART' , payload:carItem})
        }
    }

    const cartItems = getState().CartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart=(pizza)=>(dispatch, getState)=>{
    dispatch({type:'DELETE_FROM_CART', payload:pizza})
    const cartItems = getState().CartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}