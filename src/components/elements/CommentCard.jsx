import React from 'react'

const CommentCard = ({ imageUrl, name }) => {
  return (
    <div className='container py-4'>
      <div className='row g-4'>
        <div className='col'>
          <div className='card'>
            <div className='my-4 center-block'>
              <img
                src={imageUrl}
                className='rounded-circle center-block'
                alt='Ooops...'
                style={{ width: 100, height: 100 }}
              />
            </div>
            <div className='card-body'>
              <p className='card-text mb-4'>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <h5 className='card-title'>
                <b>{name}</b>
              </h5>
              <p>CEO of Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
