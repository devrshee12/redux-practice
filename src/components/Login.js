import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiLoginUser, loginUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onLogin = async(e) => {
        e.preventDefault();
        // try{
        //     const res = await axios.post("http://192.168.1.148:8000/login", {
        //         email,
        //         password
        //     })
        //     console.log(res?.data?.token);
        // }
        // catch(err){
        //     console.log(err);
        // }
        // console.log("login called");
        dispatch(apiLoginUser({email, password}));
    }


    useEffect(() => {
        if(auth.isAuthenticated){
            navigate("/dashboard");
        }
        
    }, [auth.isAuthenticated])



  return (
    <div className='login'>
        <div className="form-group login-under">
    <label className="form-label mb-4 text-body-secondary">Login Here</label>
    <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label for="floatingPassword">Password</label>
    </div>
    <div className='login-btn-container'>
        <button type="button" className="btn btn-outline-primary" onClick={() => {navigate("/signup")}}>Don't have an account ?</button>
        <button type="button" className="btn btn-outline-success" onClick={onLogin}>Login</button>
    </div>
    </div>
    </div>
  )
}


export default Login
