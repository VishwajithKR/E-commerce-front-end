import React, { useState } from 'react';
import CommonSection from '../UI/CommonSection';
import Helmet from '../helmet/Helmet';
import '../style/shop.css';
import products from '../assets/data/products';
import Productlist from '../UI/Productlist';

function Shop() {

  const [productData, setProductData] = useState(products);

  const handlefilter = (e) => {
    const filtervalue = e.target.value


    if (filtervalue === 'sofa') {
      const filterproduct = products.filter((item) => item.category === 'sofa')
      setProductData(filterproduct)
    }


    if (filtervalue === 'mobile') {
      const filterproduct = products.filter((item) => item.category === 'mobile')
      setProductData(filterproduct)
    }


    if (filtervalue === 'chair') {
      const filterproduct = products.filter((item) => item.category === 'chair')
      setProductData(filterproduct)
    }


    if (filtervalue === 'watch') {
      const filterproduct = products.filter((item) => item.category === 'watch')
      setProductData(filterproduct)
    }


    if (filtervalue === 'wireless') {
      const filterproduct = products.filter((item) => item.category === 'wireless')
      setProductData(filterproduct)
    }
  }

  const handleSearch = (e) => {
    const search = e.target.value;
    const searchProduct = products.filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()))

    setProductData(searchProduct)
  }


  return <Helmet title='Shop'>
    <CommonSection title='Products'></CommonSection>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='filter_widge'>
              <select onChange={handlefilter}>
                <option >Filter by Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 text-end'>
            <div className='filter_widge'>
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="decending">Decending</option>

              </select>
            </div>
          </div>
          <div className='col-lg-6 col-md-12' >
            <div className='search_box'>
              <input type="" placeholder='Search......' onChange={handleSearch} />
              <span><i class="bi bi-search"></i></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row'>
          {
            productData.length === 0 ? (
              <h1 className='text-center fs-4'>No Products is found</h1>
            ) : (
              <Productlist data={productData}></Productlist>)
          }
        </div>
      </div>
    </section>
  </Helmet>
}

export default Shop