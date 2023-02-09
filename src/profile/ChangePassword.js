import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../style/changepassword.css';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState(true)
    const [newPassword, setNewPassword] = useState(true)
    const [loading, setLoading] = useState(true)

    const oldsign = () => {
        setOldPassword(!oldPassword)
    }

    const newsign = () => {
        setNewPassword(!newPassword)
    }
    const user = useSelector(state => state.cart.userDetails)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: user[0].email,
            Oldpassword: "",
            password: ""
        },
        onSubmit: async (values) => {
            setLoading(false)
            try {
                let user = await axios.put('https://sore-pink-dhole-garb.cyclic.app/changepassword', values)
                if (user.data.message === 'edited') {
                    toast.success('Successfully Changed.')
                    navigate('/home')
                } else {
                    if (user.data.message === 'not matched') {
                        toast.error('Password is not matched. Try again later.')
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    })

    return <div className='container-fluid '>
        <div className='row'>
            <div className='col-lg-3 pwd_top'>

            </div>
            <div className='col-lg-6 pwd mt-3 mb-5'>
                <h4 className='mt-2 justify-content-letf'>Password Settings :-</h4>

                <div class="container okkk mt-4">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >Email</label>
                            </div>
                            <div class="col-75">
                                <input type="email" name="email"
                                    value={formik.values.email}
                                />
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >Old Password</label>
                            </div>
                            <div class="col-75 position_password">
                                <input type={oldPassword ? "password" : "text"} name="Oldpassword" placeholder="" required
                                    value={formik.values.Oldpassword}
                                    onChange={formik.handleChange} />
                                <span className='eye_dlt'
                                    onClick={() => oldsign()}>
                                    {oldPassword ? (<i class="bi bi-eye-slash"></i>) : (<i class="bi bi-eye"></i>)}
                                   
                                </span>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >New Password</label>
                            </div>
                            <div class="col-75 position_password">
                                <input type={newPassword ? "password" : "text"} name="password" required
                                    value={formik.values.password}
                                    onChange={formik.handleChange} />
                                <span className='eye_dlt'
                                    onClick={() => newsign()}>
                                    {newPassword ? (<i class="bi bi-eye-slash"></i>) : (<i class="bi bi-eye"></i>)}
                                    
                                </span>
                            </div>
                        </div>


                        <div class="row">
                            {
                                loading ? (<button type="submit" className='btn  btn_ok2 btn_change'> Confirm</button>) : (
                                    <button type="submit" className='btn  btn_ok2 btn_change' disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Confirm</button>)
                            }


                        </div>
                    </form>
                </div>

            </div>


            <div className='col-lg-3  pwd_top'>


            </div>




        </div>
    </div>
}

export default ChangePassword