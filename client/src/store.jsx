import {combineReducers} from 'redux'
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import {CartReducer} from './reducers/cartReducers'
import {registerUserReducer} from './reducers/userReducers'
import {loginUserReducer} from './reducers/userReducers' 
const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    CartReducer: CartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer,
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const inicialState = {
    CartReducer : {
        cartItems: cartItems
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, inicialState, composeEnhancers(applyMiddleware(thunk)))

export default store;