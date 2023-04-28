import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
// import {TextField} from '@mui/material';
import { TextField } from "@mui/material";
const img="https://tse1.mm.bing.net/th?id=OIP.xzzOuuVt73gOOmZSXtuCHgHaEK&pid=Api&P=0";
const img2="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().required("Please Enter Your Password").min(8, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string().matches(phoneRegExp,"Phone number is not valid")
  .required("This field is Required"),
});
const Signup = () => {
  return (
    <div className="container mt-5 mb-5" >
    <div
      className="card mb-5 border border-dark rounded border-2"
      style={{
         backgroundImage: `url(${img})`,
         height: "100%",
         backgroundPosition: "center",
         backgroundSize: "cover",
         border:"black"
      }}
    >
      <div className="row">
        <div className="col-md-7 ">
          <div
            style={{
              background: `url(${img2})`,
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: "300px",
            }}
          ></div>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <p className="h3">Register Here</p>
            <hr />
            <Formik
              initialValues={{
                name: "",
                email: "",
                mobile: 0,
                age: 0,
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit=""
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form onSubmit={handleSubmit}>
                  
                  <TextField
                    value={values.name}
                    onChange={handleChange}
                    id="name"
                    placeholder="Enter Full Name"
                    label="Name"
                    fullWidth
                    helperText ={errors.name}
                    error={errors.name ? true : false}
                  />
                  <TextField
                    value={values.age}
                    onChange={handleChange}
                    id="age"
                    className="mt-4"
                    placeholder="Enter Age"
                    label="Age"
                    fullWidth
                  />
                  <TextField
                    value={values.mobile}
                    onChange={handleChange}
                    id="mobile"
                    className="mt-4"
                    placeholder="Enter mobile number"
                    label='Mobile'
                    fullWidth
                    helperText ={errors.mobile}
                    error={errors.mobile ? true : false}
                  />
                  <TextField
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter valid email"
                    label="Email"
                    className="mt-4"
                    fullWidth
                    helperText ={errors.email}
                    error={errors.email ? true : false}
                  />
                  <TextField
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Enter Secure password"
                    className="mt-4"
                    label="Password"
                    fullWidth
                    helperText ={errors.password}
                    error={errors.password ? true : false}
                  />

                  <button type="submit" className="btn btn-primary mt-5">
                    Submit
                  </button>

                  <br />
                  <br />
                  <p>
                    Already Registered? <a href="/login">Login Here</a>
                  </p>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Signup;