import React, { useEffect, useState } from 'react'
import purpleBg from '../../images/purpleBg.jpeg'
import { CommentCard } from '../elements'
import usersData from '../../MOCK_DB.json'

const FeedbackBlock = () => {
  const [comments, setComments] = useState([])
  useEffect(() => setComments(usersData), [])

  const renderCarouselItems = () => {
    const chunkSize = 3
    const chunks = []

    for (let i = 0; i < comments.length; i += chunkSize) {
      chunks.push(comments.slice(i, i + chunkSize))
    }

    return chunks.map((chunk, index) => (
      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        <div className='row d-flex justify-content-center mt-5'>
          {chunk.map((comment, idx) => (
            <div key={idx} className='col-md-3'>
              <CommentCard name={comment.name} imageUrl={comment.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    ))
  }

  return (
    <div className='text-white' style={{ backgroundImage: `Url(${purpleBg})` }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='mb-5'>
        <h2 className='text-white'>
          <b>Feedback from our real clients</b>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing Lorem, ipsum dolor. <br /> Lorem ipsum
          dolor sit amet consectetur.
        </p>
      </div>
      <div id='carouselExampleIndicators' className='carousel slide pt-5'>
        <div className='carousel-indicators' style={{ marginTop: 60 }}>
          {Array.from({ length: Math.ceil(comments.length / 3) }).map((_, index) => (
            <button
              key={index}
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>{renderCarouselItems()}</div>
        <br />
        <br />
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default FeedbackBlock
