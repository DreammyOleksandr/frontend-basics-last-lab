import React from 'react'
import worker from '../../images/worker.png'
import purpleBg from '../../images/purpleBg.jpeg'

const GetStartedBlock = () => {
  return (
    <div className='container-fluid text-white' style={{ backgroundImage: `Url(${purpleBg})` }}>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center text-md-left p-3'>
          <div className='px-3 pb-5'>
            <p className='text-uppercase text-light text-start'>
              Don't look further, this is our leader
            </p>
            <br />
            <p className='text-light text-start h1 text-capitalize' style={{ fontSize: '50px' }}>
              <b>All things need to repair</b>
            </p>
            <br />
            <p className='text-start'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatem,
              nostrum corporis quia maiores possimus a voluptate perspiciatis ducimus suscipit
              temporibus repudiandae ipsa impedit laudantium excepturi iste error hic quaerat.
            </p>
            <div className='position-absolute'>
              <button className='btn btn-secondary'>Get started</button>
            </div>
          </div>
        </div>

        <div className='col-md-6 text-center h-100'>
          <img src={worker} alt='Ooops...' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default GetStartedBlock
