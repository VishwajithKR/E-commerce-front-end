import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import '../style/productdetails.css';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';

function ProductDetails() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.cart.userDetails)
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    })
    )
    toast.success('Product added successfully')
  }

  const noUser=()=>{
    toast.warning("Sign-in and Purchase the Products")
  }
  const { id } = useParams()
  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, shortDesc } = product

  return <Helmet title={productName}>
    <CommonSection title={productName}></CommonSection>
    <section className='pt-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6' >
            <img src={imgUrl} alt="" />
          </div>
          <div className='col-lg-6 mt-5'>
            <div className='product_details'>
              <h2>{productName}</h2>
              <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                <div>
                  <span><i class="bi bi-star-half"></i></span>
                  <span><i class="bi bi-star-half"></i></span>
                  <span><i class="bi bi-star-half"></i></span>
                  <span><i class="bi bi-star-half"></i></span>
                  <span><i class="bi bi-star-half"></i></span>
                  <span><i class="bi bi-star-half"></i></span>
                </div>
                <p>(<span>{avgRating}</span> rating)</p>
              </div>
              <span className='product_price'>$ {price}</span>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{ scale: 1.1 }} className='buy_btn' onClick={user[0] ? addToCart : noUser}>Add to Cart</motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>



  </Helmet>
}

export default ProductDetails