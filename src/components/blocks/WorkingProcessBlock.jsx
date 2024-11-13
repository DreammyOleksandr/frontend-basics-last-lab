import React from 'react'
import { IconCard } from '../elements'

const WorkingProcessBlock = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className='my-5 p-3'>
        <h1>
          <b>Our Working Process</b>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure nostrum dolorum
          excepturi minus? Nobis? <br /> Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className='row p-5'>
        <div className='col-sm-3 py-5'>
          <IconCard
            icon={
              <i className='bi bi-funnel border border-dark p-5' style={{ fontSize: '80px' }}></i>
            }
          />
        </div>
        <div className='col-sm-3 py-5'>
          <IconCard
            icon={
              <i className='bi bi-copy border border-dark p-5' style={{ fontSize: '80px' }}></i>
            }
          />
        </div>
        <div className='col-sm-3 py-5'>
          <IconCard
            icon={
              <i
                className='bi bi-fingerprint border border-dark p-5'
                style={{ fontSize: '80px' }}
              ></i>
            }
          />
        </div>
        <div className='col-sm-3 py-5'>
          <IconCard
            icon={
              <i
                className='bi bi-emoji-smile border border-dark p-5'
                style={{ fontSize: '80px' }}
              ></i>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default WorkingProcessBlock
