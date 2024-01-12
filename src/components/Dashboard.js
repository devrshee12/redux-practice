import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, setAuthentication, setToken } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {   
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("auth object : ", auth);
        dispatch(getUserDetails(auth.token))
    }, [])


    const onLogout = (e) => {
        dispatch(setAuthentication(false))
        dispatch(setToken(""));
        navigate("/")
    }

  return (
    <div className='dashboard'>
        <div className="form-group dashboard-under">
    <label className="form-label mb-4 text-body-secondary">User Detail</label>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={auth.user.email} />
      </div>
      <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={auth.user.name} />
      </div>
      <div className='signup-btn-container'>
        {/* <button type="button" className="btn btn-primary">Don't have an account ?</button> */}
        <button type="button" className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
    </div>
    </div>
     </div>
    </div>
  )
}


export default Dashboard
