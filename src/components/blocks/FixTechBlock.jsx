import React from 'react'
import workingPair from '../../images/workingPair.jpg'
import { Card } from '../elements'

const FixTechBlock = () => {
  return (
    <div className='container-fluid text-black' style={{ backgroundColor: '#f9f8ff' }}>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center text-md-left p-3'>
          <div>
            <div className='px-3 pb-5'>
              <br />
              <p className='text-start h1 text-capitalize' style={{ fontSize: '50px' }}>
                <b>We can fix all types of computers & mobile</b>
              </p>
              <br />
              <p className='text-start'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatem,
                nostrum corporis quia maiores possimus a voluptate perspiciatis ducimus suscipit
                temporibus repudiandae ipsa impedit laudantium excepturi iste error hic quaerat.
              </p>
            </div>
          </div>
          <div className='row text-start'>
            <div className='col-sm-5 pb-5 mx-3'>
              <h1>
                <i className='bi bi-gem'></i>
              </h1>
              <br />
              <Card />
            </div>
            <div className='col-sm-5 pb-5 mx-3' style={{ backgroundColor: '#f9f8ff' }}>
              <h1>
                <i className='bi bi-telephone'></i>
              </h1>
              <br />
              <Card />
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <img src={workingPair} alt='Ooops...' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default FixTechBlock
