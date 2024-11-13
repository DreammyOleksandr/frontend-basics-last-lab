import React from 'react'

const DiscountForm = () => {
  return (
    <div>
      <form>
        <div>
          <input
            type='text'
            className='form-control border border-white text-light rounded-1 mb-5'
            placeholder='Your name'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <input
              type='text'
              className='form-control border border-white text-light rounded-1 mb-5'
              placeholder='Phone'
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            />
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              className='form-control border border-white text-light rounded-1 mb-5'
              placeholder='Email'
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            />
          </div>
          <div>
            <textarea
              className='form-control border border-white text-light rounded-1 mb-5'
              rows='3'
              placeholder='Message'
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            ></textarea>
          </div>
          <div className='mb-5 d-flex'>
            <button className='btn btn-primary text-uppercase ms-auto'>Order service now</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DiscountForm
