import React from 'react'
import ProductCards from './ProductCards'

function Productlist({ data,index }) {
  return (
    <>
      {
        data?.map((item) => <ProductCards item={item} key={index}></ProductCards>)
      }

    </>
  )
}

export default Productlist