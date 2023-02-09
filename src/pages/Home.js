import React, { useState, useEffect } from 'react';
import Helmet from '../helmet/Helmet';
import '../style/home.css'
import image from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Service from '../service/Service';
import Productlist from '../UI/Productlist';
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../UI/Clock'

function Home() {

  const [trendingProducts, setTrendingProducts] = useState([])

  const [bestSales, setBestSales] = useState([])

  const [mobile, setMobile] = useState([])

  const [wireless, setWireless] = useState([])

  const [popularProducts, setPopularProducts]=useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendingProduct = products.filter((item) => item.category === 'chair')

    const filterBestProduct = products.filter((item) => item.category === 'sofa')

    const filterMobiles = products.filter((item) => item.category === 'mobile')

    const filterWireless = products.filter((item) => item.category === 'wireless')

    const filterPopular = products.filter((item) => item.category === 'watch')



    setBestSales(filterBestProduct);
    setTrendingProducts(filterTrendingProduct);
    setMobile(filterMobiles);
    setWireless(filterWireless);
    setPopularProducts(filterPopular)


  }, []);

  return <Helmet title={'Home'}>
    <section className='hero_section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <div className='hero_content'>
              <p className='hero_subtitle'>Trending Product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>The recommended way to start new apps with React and Redux is by
                using the official Redux+JS template or Redux+TS template for Create React App.</p>
              <Link to='/shop'><motion.button whileTap={{ scale: 1.1 }} className='buy_btn'>SHOP NOW</motion.button></Link>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='hero_img'>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Service></Service>
    <section className='trending_products'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </div>
          <Productlist data={trendingProducts}></Productlist>
        </div>
      </div>
    </section>


    <section className='best_sales'>
      <div className='container'>
        <div className='row'>
          <div className='text-center col-lg-12'>
            <h2 className='section_title'>Best Sales</h2>
          </div>
          <Productlist data={bestSales}></Productlist>
        </div>
      </div>
    </section>


    <section className='timer_count'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='clock_top_content'>
              <h4 className='text-white fs-6'>Limited Time Offer</h4>
              <h3 className='text-white fs-5'>Quality Arm Chair</h3>
            </div>
            <Clock></Clock>
            <Link to='/shop'> <motion.button whileTap={{ style: 1.2 }} className='buy_btn store_btn '>
             Visit Store
            </motion.button></Link>
          </div>
          <div className='col-lg-6 col-md-12 text-end time_pic'>
            <img src={counterImg} alt="" />
          </div>
        </div>
      </div>
    </section>


    <section className='new_arrive'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center mb-5'>
            <h2 className='section_title'>New Arrivals</h2>
          </div>
          <Productlist data={mobile}></Productlist>
          <Productlist data={wireless}></Productlist>

        </div>

      </div>
    </section>


    <section className='popular_category'>
    <div className='container'>
        <div className='row'>
          <div  className='col-lg-12 text-center mb-5'>
            <h2 className='section_title'>Popular in Category</h2>
          </div>
          <Productlist data={popularProducts}></Productlist>
          
        </div>

      </div>
    </section>
  </Helmet>
}

export default Home