import React, {useState} from "react";


export default function Register(){
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[confirmPassword, setconfirmPassword]= useState('');
    function register(){
        if(password=confirmPassword)
        {
            alert("las contrasenhas no coinciden")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user)
        }
    }
    return(
        <div>
            <div className="row justify-content-center nt-5">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{fontSize:'35px'}}>Registrate</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <input required type="text" placeholder="confirm password" className="form-control" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} />
                        <button onClick={register} className='btn mt-3'>REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}