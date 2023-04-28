// import React from "react";
import { Formik } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signin = () => {
//   const userSubmit = async (formdata) => {
//     console.log(formdata);
//     const res=await fetch('http://localhost:5000/user/authenticate',{
//           method: 'POST',
//           body: JSON.stringify(formdata),
//           headers :{
//             'Content-Type':"application/json"
//           }      
//         })
//         if(res.status===200){
//           Swal.fire({
//             icon: 'success',
//             title: 'Login Successful',
//             text: 'You are logged in'
//           })
//           res.json().then(data=>{
//             sessionStorage.setItem("user",JSON.stringify(data));
//             setLoggedIn(true);
//             navigate('/browse');
//          });
//         }else if(res.status===400){
//           Swal.fire({
//             icon: 'error',
//             title: 'Login Failed',
//             text: 'Invalid username or password'
//           })
//         }else{
//           Swal.fire({
//             icon: 'error',
//             title: 'Login Failed',
//             text: 'Something went wrong'
//           })
//         }
// }
  return (
    <section style={{ backgroundColor: "#9A616D", minHeight: '100vh' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://www.weblineindia.com/wp-content/uploads/2017/03/full-stack-development-by-weblineindia.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                  <Formik initialValues={{email : '', password : ''}}  onSubmit={""}>
                            {({values, handleChange, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
              
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2 me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                      <input value={values.email} onChange={handleChange} id="email" className='form-control' />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                      <input value={values.password} onChange={handleChange} id="password" type="password" className='form-control' />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                            )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
