import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import '../style/checkout.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Checkout1() {

    const totalQty = useSelector(state => state.cart.TotalQuantity)
    const totalAmount = useSelector(state => state.cart.TotalAmount)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)


    const details = useSelector(state => state.cart.userDetails)
   
    const formik = useFormik({
        initialValues: {
            user: details[0].userName,
            email: details[0].email,
            phone: '',
            street: "",
            pincode: "",
            city: ""

        },
        onSubmit: async (values) => {
            setLoading(false)
            try {
                await axios.post('https://ecommerce-csek.onrender.com/useraddress', values)
                toast.success("Ordered")
                navigate('/payment')
            } catch (error) {
                console.log(error)
            }
        }
    })

    return <section className='billing'>
        <div className='container'>
            <div className='row'>

                <div className='col-lg-4 checkout_box'>
                    <div className='checkout_cart'>
                        <h6>Total Qty:<span>{totalQty} items</span></h6>
                        <h6>sub-Total:<span>$ {totalAmount}</span></h6>
                        <h6>
                            <span>
                                Shipping :<br />
                                free shipping
                            </span>
                            <span>$0</span>
                        </h6>

                        <h4>Total Cost:<span>$ {totalAmount}</span></h4>


                    </div>


                </div>
                <div className='col-lg-6 payment-title'>
                    <h4 className='justify-content-center text-center'>Billing Information</h4>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mt-2'>
                            <label className='form-label'>User Name</label>
                            <input type="text" class='form-control' name="user"
                                value={formik.values.user}
                            />
                        </div>
                        <div className='mt-3'>
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name='email'
                                value={formik.values.email}
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Phone Number</label><span className='required_text'> *</span>
                            <input type="number" class='form-control' name="phone" required
                                value={formik.values.phone}
                                onChange={formik.handleChange} />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Street</label><span className='required_text'> *</span>
                            <input type="text" class='form-control' name="street" required
                                value={formik.values.street}
                                onChange={formik.handleChange} />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Pin-code</label><span className='required_text'> *</span>
                            <input type="number" class='form-control' name="pincode" required
                                value={formik.values.pincode}
                                onChange={formik.handleChange} />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>City</label><span className='required_text'> *</span>
                            <input type="text" class='form-control' name="city" required
                                value={formik.values.city}
                                onChange={formik.handleChange} />
                        </div>
                        {loading ? (<button type="submit" class="btn btn-primary mt-4 ">Place Ordered</button>) : (<button type="submit" class="btn btn-primary mt-4 " disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Ordering</button>)}

                    </form>
                </div>

                <div className='col-lg-2'></div>
            </div>
        </div>
    </section>


}

export default Checkout1