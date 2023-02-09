import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
// import logo from '../../assets/images/eco-logo.png'


function Footer() {

  const year = new Date().getFullYear()
  return (<footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          <div className='logo'>
           
            <div>
              <h1 className='text-white'>MultiMart</h1>

            </div>

          </div>
          <p className='footer_text mt-4'>Framer Motion is a declarative animation library for React.
            It makes adding animations to React apps feel simple,
            even magical. Framer Motion basically</p>
        </Col>
        <Col lg='3' className='mb-4' md='6'>
          <div className='footer_text_links'>
            <h4 className='footer_link_title'>Top Category</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chairs</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2' className='mb-4' md='3'>
        <div className='footer_text_links'>
            <h4 className='footer_link_title'>Useful Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' className='mb-4' md='4'>
        <div className='footer_text_links'>
            <h4 className='footer_link_title'>Contact</h4>
            <ListGroup className='mb-3 footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="bi bi-geo-alt"></i></span>
                <p>2nd floor, Solinganallur,Chennai, TamilNadu </p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="bi bi-telephone"></i></span>
                <p>+91 98765 43210</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="bi bi-envelope-at"></i></span>
                <p>abc123@gmail.com</p>
              </ListGroupItem>
             
            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <div className='footer_copyright'>
            Copyright @ {year} developed by Vishwajith. All rights Reserved.
          </div>
        </Col>
      </Row>
    </Container>

  </footer>
  )
}

export default Footer