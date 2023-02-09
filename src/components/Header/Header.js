import React, { useRef, useEffect } from 'react'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slice/CartSlice'
import { toast } from 'react-toastify'


const Header = () => {

  let dispatch = useDispatch()
  const navigate = useNavigate()
  const totalQuality = useSelector(state => state.cart.TotalQuantity)
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyFunction = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')

      }
    })
  }

  const details = useSelector(state => state.cart.userDetails)
 
  const logout = () => {
    dispatch(cartActions.Logout())
    toast.success(`Signout "${details[0].userName}"`)
    navigate('/home')
  }
  useEffect(() => {
    stickyFunction()

    return () => window.addEventListener("scroll", stickyFunction)
  }, []);

  const nav_links = [
    { path: 'home', display: 'Home' },
    { path: 'shop', display: 'Shop' },
    { path: "cart", display: "Cart" }
  ]
  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  const navigateToCart = () => {
    navigate('/cart')
  }
  


  return <header className='header' ref={headerRef}>
    <div className='container'>
      <div className='row'>

        <div className='nav_warpper'>
          <div className='logo'>
            <img src={logo} alt="logo" className='header_logo' />
            <div>
              <h1>MultiMart</h1>

            </div>
          </div>
          <div className='navigation' ref={menuRef} onClick={menuToggle}>
            <ul className='menu'>

              {
                nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                  </li>
                ))
              }

            </ul>
          </div>
          <div className='nav_icons'>
            {/* <span className='fav_icon'><i class="bi bi-suit-heart"></i>
              <span className='badge'>1</span>
            </span> */}
            <span className='cart_icon' onClick={navigateToCart}><i class="bi bi-cart-plus-fill"></i>
              <span className='badge'>{totalQuality}</span>
            </span>
            <span>  <Link to='/signup'><motion.img whileTap={{ scale: 1.2 }} src={user_icon} alt="" /> </Link> </span>
            <div className='mobile_menu'>
              <span onClick={menuToggle}><i class="bi bi-list"></i></span>
            </div>
            <span>
              {details[0] ? (

                <div class="dropdown">
                  <div class="  title_btn_name fs-4 fw-semibold ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {details[0].userName}
                  </div>
                  <ul class="dropdown-menu">
                   <Link to="/home/profile"> <li><p class="dropdown-item title_down p-0 text-center" >Profile </p></li></Link>
                    <li><p class="dropdown-item title_down  p-0 text-center" >My orders</p></li>
                    <li><p class="dropdown-item title_down  p-0 text-center" onClick={logout} >Logout</p></li>
                  </ul>
                </div>


              ) : ('')}
            </span>
            {/* {details[0]?(<span><i class="bi bi-disc text-danger logout_icon"></i></span>):(<span></span>)} */}
          </div>
        </div>
      </div>
    </div>
  </header>


}

export default Header


