import axios from "axios"
export const RegisterUser= (user) => async dispatch=>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    try{
        const response = await axios.post('/api/user/register', {user})
        dispatch({type:'USER_REGISTER_SUCCESS'})
    } catch(error){
        dispatch({type:'USER_REGISTER_FAILED', payload: error})
    }
}