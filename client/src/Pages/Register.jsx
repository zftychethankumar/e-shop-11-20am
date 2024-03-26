import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom' 

function Register() {
  const [user,setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    password:""
  })

  const navigate = useNavigate()

  const readValue = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      console.log(`new user =`, user)

      await axios.post(`/api/auth/register`, user)
        .then(res => {
          toast.success(res.data.msg)
          navigate(`/login`)
        }).catch(err => toast.error(err.response.data.msg))
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center mt-3" style={{ height: '100vh' }}>
      <div className="row">
         <div className="col-md-6 col-lg-6 col-sm-12 d-none d-md-block d-lg-block">
            <img src={`${process.env.PUBLIC_URL}/signup.svg`} alt="" className="img-fluid"/>
         </div>
         <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card">
            <div className="card-header text-center-bg-white">
                <h4 className="display-4 text-theme">SignUp</h4>
              </div>
              <div className="card-body">
                <form autoComplete="off">
                  <div className="form-group mt-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={user.name} onChange={readValue} id="name" className="form-control" required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"value={user.email} onChange={readValue} id="email" className="form-control" required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" name="mobile" value={user.mobile} onChange={readValue} id="mobile" className="form-control" required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={readValue} id="password" className="form-control" required />
                  </div>
                  <div className="form-group mt-2">
                    <input type="submit" value="Signup" className="btn bg-theme text-white" />
                  </div>
                </form>
                <NavLink to={`/login`} className="text-theme float-end">
                  Already registered? Login Here..
                </NavLink>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Register