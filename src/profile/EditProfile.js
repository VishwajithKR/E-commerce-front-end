import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartActions } from '../redux/slice/CartSlice';
import '../style/editprofile.css'

function EditProfile() {
  const navigate = useNavigate()
  const user = useSelector(state => state.cart.userDetails)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [password, setNewpassword] = useState(true)

  const show=()=>{
    setNewpassword(!password)
  }

  const formik = useFormik({
    initialValues: {
      userName: "",
      phone: "",
      gender: "",
      dob: "",
      email: user[0].email,
      currentpassword: ""
    },
    onSubmit: async (values) => {
      setLoading(false)
      try {
        let user = await axios.put('https://ecommerce-csek.onrender.com/profile-edit', values)
        console.log(user.data.message)
        if (user.data.message === 'edited') {
          toast.success("Edited your profile, Please Re-login")
          dispatch(cartActions.Logout())
          navigate('/home')
        } else {
          if (user.data.message === 'password not matched') {
            toast.warning('please check your password and try again later')
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
        <h4 className='mt-2 justify-content-letf'>Account Settings :-</h4>

        <div class="container okkk mt-4">
          <form onSubmit={formik.handleSubmit}>
            <div class="row mt-2">
              <div class="col-25">
                <label >Email</label>
              </div>
              <div class="col-75">
                <input type="email" name="email"
                  value={formik.values.email} />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-25">
                <label >User Name</label>
              </div>
              <div class="col-75">
                <input type="text" name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange} />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-25">
                <label >Date of Birth</label>
              </div>
              <div class="col-75">
                <input type="date" name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange} />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-25">
                <label >Gender</label>
              </div>
              <div class="col-75">
                <input type="text" name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange} />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-25">
                <label >Phone</label>
              </div>
              <div class="col-75">
                <input type="number" name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange} />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-25">
                <label >Password</label>
              </div>
              <div class="col-75 position_password">
                <input type={password?"password":"text"} name="currentpassword"
                  value={formik.values.currentpassword}
                  onChange={formik.handleChange} />
                  <span className='eye_dlt' onClick={()=>show()}>{password ?(<i class="bi bi-eye-slash"></i>):(<i class="bi bi-eye"></i>)}</span>
              </div>
            </div>

            <div class="row">
              {
                loading ? (<button type="submit" className='btn  btn_ok btn_change'> Change</button>) :
                  (<button type="submit" className='btn  btn_ok btn_change' disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Changing</button>)
              }


            </div>
          </form>
        </div>

      </div>


      <div className='col-lg-3  '>


      </div>

    </div>
  </div>
}

export default EditProfile