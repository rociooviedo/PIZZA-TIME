import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser } from "../actions/userAction";
import Loading from "../components/loading";
import Error from "../components/error";
import Success from "../components/success";
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const registerstate = useSelector(state => state.registerUserReducer)
    const {error , loading , success} = registerstate

    const dispatch = useDispatch();
    function register() {
        if (password = confirmPassword) {
            alert("las contrasenhas no coinciden")
        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(RegisterUser(user))
        }
    }
    return (
        <div className="register">
            <div className="row justify-content-center nt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Email already registred' />)}

                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Registrate</h2>
                    <div>
                        <input required type="text" placeholder="nombre" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        <input required type="text" placeholder="correo electronico" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input required type="text" placeholder="contrasenha" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input required type="text" placeholder="confirmar contrasenha" className="form-control" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                        <button onClick={register} className='btn mt-3'>REGISTRARSE</button>
                        <br />
                        <a style={{ color: 'black' }} href="/login" className="mt-2">Click aqui para Iniciar sesion</a>
                    </div>
                </div>
            </div>
        </div>
    )
}