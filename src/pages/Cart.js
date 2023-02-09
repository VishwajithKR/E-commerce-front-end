import React from 'react';
import '../style/cart.css';
import Helmet from '../helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slice/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {


  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.TotalAmount)
  const detail = useSelector(state => state.cart.userDetails)

  return <Helmet title='cart'>
    <CommonSection title='Shoping cart'> </CommonSection>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9' >
            {
              cartItems.length === 0 ? (<h2 className='fs-4 text-center'> No item added</h2>) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      cartItems.map((item, index) => {
                        return (
                          <Tr item={item} key={index}></Tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              )
            }


          </div>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                <span className='fs-4 fw-bold'>$ {totalAmount}</span>
              </h6>

            </div>
            <p className='fs-6 mt-2'>taxes and shipping will calculated in checkout</p>
            <div >
             <Link to={detail[0] ? '/checkout1' : '/login'}> <button className='buy_btn w-100  '>Checkout</button></Link>
              <Link to={`/shop`}><button className='buy_btn w-100 mt-3'>Continue Shopping</button></Link>
            </div>
          </Col>
        </div>
      </div>
    </section>

  </Helmet>
}

const Tr = ({ item }) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr>
    <td>
      <img src={item.imgUrl} alt="" />
    </td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity} px</td>
    <td><motion.i onClick={deleteProduct} whileTap={{ scale: 1.2 }} class="bi bi-trash "></motion.i></td>
  </tr>
}

export default Cart