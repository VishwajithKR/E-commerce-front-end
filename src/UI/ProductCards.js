import React from 'react'
// import productImg from '../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion';
import '../style/product-card.css'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';

function ProductCards({ item }) {

    const dispatch = useDispatch()

    let details = useSelector(state => state.cart.userDetails)

    const noSignIn = () => {
        toast.warning("Sign-in and Purchase the Products")
        // alert("Please Sign-in")
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
        }))
        toast.success('Product added successfully')
    }

    return (<Col lg='3' md='4' className='mb-2'>
        <div className='product_card'>
            <div className='product_img'>
                <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
            </div>
            <div className='p-2 product-info'>
                <h3 className='product_name'><Link to={`/shop/${item.id}`} >{item.productName}</Link></h3>
                <span>{item.category}</span>
            </div>
            <div className='product_card-bottom d-flex align-items-center justify-content-between p-2'>
                <span className='price'>$ {item.price}</span>
                <motion.span whileTap={{ scale: 1.1 }} onClick={details[0] ? addToCart : noSignIn}><i class="bi bi-plus"></i></motion.span>
            </div>
        </div>
    </Col>

    )
}

export default ProductCards;