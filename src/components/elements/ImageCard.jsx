import React from 'react'

const ImageCard = ({ imageUrl }) => {
  return (
    <div class='card border-0'>
      <img class='card-img-top' style={{ maxHeight: '225px' }} src={imageUrl} alt='Ooops...' />
      <div class='card-body'>
        <h4 class='card-title'>
          <b>Lorem ipsum dolor sit</b>
        </h4>
        <p class='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam veniam
          possimus laborum commodi error voluptates, pariatur tempore aspernatur beatae.{' '}
        </p>
      </div>
    </div>
  )
}

export default ImageCard
