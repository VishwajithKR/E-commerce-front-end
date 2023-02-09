import React, { useState } from 'react';
import Helmet from '../helmet/Helmet';
import { Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';

function Signup() {

  const navigate = useNavigate();


  const [password, setPassword] = useState(true);
  const [rePassword, setRepassword] = useState(true);
  const [loading, setLoading] = useState(true);

  const change = () => {
    setPassword(!password)
  }

  const rechange = () => {
    setRepassword(!rePassword)
  }


 


  


  const formik = useFormik({
    initialValues: {
      userName: "",
      phone:'',
      gender: '',
      dob: "",
      email: "",
      password: "",
      rePassword: ""
    },
    onSubmit: async (values) => {
      setLoading(false)
      
      try {
        let users = await axios.post('https://ecommerce-csek.onrender.com/users', values)
        if (users.data.message === 'already have') {
          toast.warning("email or Phone number already used")
          navigate('/home')
        } else {
          if (users.data.password === users.data.rePassword) {
            toast.success("Account created")
            navigate('/login')
          } else {
            toast.error("Password and Re-Password is Not Matched")
            navigate('/home')
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
  });


  return <Helmet title="Signup">
    <section>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-lg-6 m-auto text-center login_clr '>
            <h3 className='fw-bold mb-3'>Signup</h3>
            <Form className='login_group mt-5' onSubmit={formik.handleSubmit} >
              <FormGroup className=' bt-3'>
                <input type="text" placeholder='username' name='userName' id='userName' required
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                />
              </FormGroup>

              <FormGroup className=' bt-3'>
                <input type="number" name='phone' placeholder='Enter your phone number'  required
                value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </FormGroup>

              <FormGroup className=' bt-3'>

                <select className='form-select mb-3' name='gender' onChange={formik.handleChange}
                  value={formik.values.gender} required >
                  <option selected disabled value=''>gender</option>
                  <option
                    value="male">male</option>
                  <option
                    value="female" >female</option>
                  <option
                    value="other" >other</option>
                </select>

              </FormGroup>
              <FormGroup className=' bt-3'>
                <input name="dob" type="date" placeholder='Date of Birth' id='status' max='10-02-2022' required
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                />
              </FormGroup>

              <FormGroup className=' bt-3'>
                <input name="email" type="email" placeholder='Enter your email' id='email' required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </FormGroup>

              <FormGroup className='bt-3 pwd_btn'>
                <input type={password ? "password" : "text"} placeholder='Enter your password' name='password' id='password' required
                  value={formik.values.password}
                  onChange={formik.handleChange}
                /><span className='eye_btn' onClick={() => change()}>{password ? (<i class="bi bi-eye-slash"></i>) : (<i class="bi bi-eye"></i>)}</span>
              </FormGroup>

              <FormGroup className='bt-3 pwd_btn'>
                <input type={rePassword ? "password" : "text"} placeholder='Enter your re-password' name='rePassword' id='rePassword' required
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                /><span className='eye_btn' onClick={() => rechange()}>{rePassword ? (<i class="bi bi-eye-slash"></i>) : (<i class="bi bi-eye"></i>)}</span>
              </FormGroup>



              {
                loading ? (
                  <><button type="submit" className='btn btn-primary signup_btn' ><span >Create a account</span>  </button>
                    <p className='mt-2'>Already have a account? <Link to='/login'>Login</Link></p></>
                ) : (
                 <div><button className='btn btn-primary signup_btn' disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                    </span> Loading</button>
                    <br/>
                    <br/>
                    </div> 

                )
              }




            </Form>
          </div>
        </div>
      </div>
    </section>
  </Helmet>
}

export default Signup;