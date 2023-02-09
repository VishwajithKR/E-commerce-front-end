import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartActions } from '../redux/slice/CartSlice';
import '../style/delete.css'

function Delete() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.cart.userDetails)
  const [loading, setLoading] = useState(true)
  const[hide,setHide]=useState(true)

  const show =()=>{
    setHide(!hide)
  }
  const formik = useFormik({
    initialValues: {
      email: user[0].email,
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(false)
      try {
        let userdata = await axios.post("https://sore-pink-dhole-garb.cyclic.app/deleteuser", values)
        console.log(userdata)
        if (userdata.data.message === "deleted") {
          toast.success(`${user[0].userName} Account is Deleted`)
          navigate('/home')
          dispatch(cartActions.Logout())
        } else {
          if (userdata.data.message === "Wrong Password") {
            toast.error('wrong pasword')
            navigate('/home/profile')
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  return <div className='container-fluid '>
    <div className='row'>
      <div className='col-lg-3 edit_top'>

      </div>
      <div className='col-lg-6 edit mb-5'>
        <h4 className='mt-2 justify-content-letf'>Delete Account :-</h4>

        <div class="container okkk mt-4">
          <form onSubmit={formik.handleSubmit} >
            <div class="row mt-2">
              <div class="col-25">
                <label >Email</label>
              </div>
              <div class="col-75">
                <input type="email" name="email" id='email'

                  value={formik.values.email} />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-25">
                <label >Password</label>
              </div>
              <div class="col-75 position_password" >
                <input type={hide?"password":"text"} name="password" id='password' required
                  onChange={formik.handleChange}
                  value={formik.values.password} />
                  <span className='eye_dlt ' onClick={()=>show()}>{hide?(<i class="bi bi-eye-slash"></i>):(<i class="bi bi-eye"></i>)}</span>
              </div>
            </div>
            <div class="row">
              {
                loading ? (<button type="submit" className='btn  btn_dl btn_change'> Delete</button>) :
                  (<button type="submit" className='btn  btn_dl btn_change' disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Deleting</button>)
              }

            </div>
          </form>
        </div>

      </div>


      <div className='col-lg-3   '>


      </div>




    </div>
  </div>
}

export default Delete