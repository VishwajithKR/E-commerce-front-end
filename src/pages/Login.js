import React, { useState } from 'react';
import Helmet from '../helmet/Helmet';
import { Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slice/CartSlice';

function Login() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)


  const user = useSelector(state => state.cart.userDetails)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ""
    },
    onSubmit: async (values) => {
      setLoading(false)
      try {
        let users = await axios.post('https://sore-pink-dhole-garb.cyclic.app/login', values)
        window.localStorage.setItem("my_token", users.data.token)

        if (users.data.message === "correct") {
          dispatch(cartActions.Address(users.data.user))
          toast.success('Logined')
          navigate('/home')

        }
        if (users.data.message === 'Id and password not match') {
          dispatch(cartActions.Logout())
          toast.error('User Id and Password is not matched')
          navigate('/signup')
        }
        if (users.data.message === "No user is found") {
          dispatch(cartActions.Logout())
          toast.warning('no user is found')
          navigate('/signup')
        }
      } catch (error) {
        console.log(error)
      }
    },
  });

  const [password, setPassword] = useState(true)

  const change = () => {
    setPassword(!password)
  }

  return <Helmet title="Login">
    <section>
      <div className='container'>
        <div className='row'>
          <div className='m-auto text-center login_clr col-lg-6 '>
            <h3 className='fw-bold mb-3'>Login</h3>
            <Form className='login_group mt-5' onSubmit={formik.handleSubmit} >
              <FormGroup className=' bt-3'>
                {
                  user[0] ? (<input type="email" placeholder='Enter your email' name='email' required
                  />) : (<input type="email" placeholder='Enter your email' name='email' required
                    value={formik.values.email}
                    onChange={formik.handleChange} />)
                }
                
              </FormGroup>

              <FormGroup className='login_group abc_btn'>
                {
                  user[0] ? (<input type={password ? "password" : "text"} placeholder='Enter your password' name='password' required
                  />) : (<input type={password ? "password" : "text"} placeholder='Enter your password' name='password' required
                    value={formik.values.password}
                    onChange={formik.handleChange} />)
                }
                <span className='eye_btns' onClick={() => change()}>{password ? (<i class="bi bi-eye-slash"></i>) : (<i class="bi bi-eye"></i>)}</span>
              </FormGroup>
              {

                user[0] ? (<button className='buy_btn' onClick={() => toast.warning("Please Logout your current ID")}>Login</button>) :
                  (<span>    {
                    loading ? (
                      <><button type="submit" className='btn btn-primary signup_btn' ><span >Login</span>  </button>
                        <p className='mt-2'>Already have a account? <Link to='/signup'>Create an account</Link></p></>
                    ) : (
                      <><button className='btn btn-primary signup_btn' disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading</button>
                        <br/>
                        <br/>
                        </>

                    )
                  }</span>)
              }

            </Form>
          </div>
        </div>
      </div>
    </section>
  </Helmet>
}

export default Login;
