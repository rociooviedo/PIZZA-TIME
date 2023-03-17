import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../actions/userAction";
import Error from "../components/error";
import Loading from "../components/loading";


export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch()

    const registerstate = useSelector(state => state.loginUserReducer)
    const { error, loading } = registerstate
    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])

    function login() {
        const user = { email, password }
        dispatch(loginUser(user))
    }

    return (
        <div className='login'>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
                        Iniciar sesion
                    </h2>

                    {loading && (<Loading />)}
                    {error && (<Error error='Credenciales invalidas.' />)}

                    <div>
                        <input required type="text" placeholder="juanperez@algo.com" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input
                            type="text"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            required
                            onChange={(e) => { setpassword(e.target.value) }}
                        />

                        <button onClick={login} className="btn mt-3 mb-3">INICIA SESION</button>
                        <br />
                        <a style={{ color: 'black' }} href="/register" className="mt-2">Click Aqui para registrarte</a>
                    </div>
                </div>
            </div>
        </div>
    )
}