import React from 'react'

const ImageCard = ({ imageUrl }) => {
  return (
    <div className='card border-0'>
      <img className='card-img-top' style={{ maxHeight: '225px' }} src={imageUrl} alt='Ooops...' />
      <div className='card-body'>
        <h4 className='card-title'>
          <b>Lorem ipsum dolor sit</b>
        </h4>
        <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam veniam
          possimus laborum commodi error voluptates, pariatur tempore aspernatur beatae.{' '}
        </p>
      </div>
    </div>
  )
}

export default ImageCard
