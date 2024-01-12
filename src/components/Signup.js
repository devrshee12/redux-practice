import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiSignupUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSignup = (e) => {
        e.preventDefault();
        if(password !== "" && password === confirmPassword){
            dispatch(apiSignupUser({name, email, password}))
        }
        else{
            alert("please match password and confirm password");
        }
    }

    


    useEffect(() => {
        if(auth.isAuthenticated){
            navigate("/dashborad")

        }
    }, [auth.isAuthenticated])


  return (
    <div className='signup'>
        <div className="form-group signup-under">
    <label className="form-label mb-4 text-body-secondary">Signup Here</label>
    
    <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <label for="floatingPassword">Confirm Password</label>
    </div>
    <div className='signup-btn-container'>
        {/* <button type="button" className="btn btn-primary">Don't have an account ?</button> */}
        <button type="button" className="btn btn-outline-primary" onClick={onSignup}>Signup</button>
    </div>
    </div>
    </div>
  )
}

export default Signup