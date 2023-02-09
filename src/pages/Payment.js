import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style/payment.css'

function Payment() {

  const navigate = useNavigate()
  const quantity = useSelector(state => state.cart.TotalQuality)
  const totalAmount = useSelector(state => state.cart.TotalAmount)
  const name = useSelector(state => state.cart.userDetails)
 
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (totalAmount === "") {
      alert("please enter the amount")
    } else {
      var options = {
        key: "rzp_test_tCovK5V6BlBv1T",
        key_secret: "ejvMCXflZx1MKsuiNmvy9aCv",
        amount: totalAmount * 100,
        currency: "INR",
        name: "Payment Options",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id)
          navigate('/home')
        },
        prefill: {
          name: '',
          email:"vishwakr1998@gmail.com",
          contact: '8300728274'
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#958ee4"
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className='container mt-4 mb-4'>
      <div className='row'>
        <div className='col-lg-2'>
          {/* <h4>{name[0].userName}</h4> */}
        </div>
        <div className='col-lg-8'>
          <div className='payment_box'>
            <br />
            <h4 className=' align-items-center justify-content-center'>Payment</h4>
            <br />
            <div className='border-bottom'>

            </div>
            <br />
            <div>
              <h5 className='payment_option'>Price <span>$ {totalAmount}</span></h5>
              <br />
              <h5 className='payment_option'>Delivery Charges<span>Free   </span></h5>
              <br />
              <div className='border-bottom'>

              </div>
              <br />

              <h5 className='payment_option'>Total Payable<span>$ {totalAmount}</span></h5>
            </div>
            <br />
            <br />
            <button className='btn btn-success align-items-center justify-content-center' onClick={handleSubmit}>Continue to Payment</button>
          </div>

        </div>




        <div className='col-lg-2'></div>
      </div>
    </div>
  )
}

export default Payment