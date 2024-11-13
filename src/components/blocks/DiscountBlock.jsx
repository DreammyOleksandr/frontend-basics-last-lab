import React from 'react'
import discountBg from '../../images/discountBg.jpg'
import { DiscountForm } from '../elements'

const DiscountBlock = () => {
  return (
    <div className='container-fluid text-white' style={{ backgroundImage: `Url(${discountBg})` }}>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center text-md-left p-3'>
          <div className='px-3 pb-5'>
            <br />
            <br />
            <p className='text-light text-start h1 text-capitalize' style={{ fontSize: '50px' }}>
              <b>Enjoy 25% seasonal discount</b>
            </p>
            <br />
            <p className='text-start'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatem,
              nostrum corporis quia maiores possimus a voluptate perspiciatis ducimus suscipit
              temporibus repudiandae ipsa impedit laudantium excepturi iste error hic quaerat.
            </p>
            <div className='position-absolute'>
              <button className='btn btn-secondary text-uppercase'>Order service now</button>
            </div>
          </div>
        </div>
        <div className='col-md-6 h-100'>
          <h2 className='text-white mt-5 mb-5'>
            <b>Get a free estimate</b>
          </h2>
          <DiscountForm />
        </div>
      </div>
    </div>
  )
}

export default DiscountBlock
