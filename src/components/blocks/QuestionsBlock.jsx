import React from 'react'
import { Collapsible, ProgressBar } from '../elements'

const QuestionsBlock = () => {
  const webDesignPercentage = 80
  const uiPercentage = 75
  const mobileAppPercentage = 60
  const webDevelopmentPercentage = 90
  return (
    <div>
      <br />
      <br />
      <br />
      <div className='my-5'>
        <h1>
          <b>Frequently Asked Questions</b>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure nostrum dolorum. </p>
      </div>
      <div className='py-5'>
        <Collapsible name='Success' />
        <Collapsible name='Info' />
        <Collapsible name='Danger' />
        <Collapsible name='Warning' />
      </div>
      <br />
      <br />
      <br />
      <div className='row justify-content-evenly'>
        <div className='col-md-3 my-5' style={{ width: '200px', height: '200px' }}>
          <ProgressBar percentage={webDesignPercentage} />
          <div className='pt-4'>
            <h6>Web Design</h6>
          </div>
        </div>
        <div className='col-md-3 my-5' style={{ width: '200px' }}>
          <ProgressBar percentage={uiPercentage} />
          <div className='pt-4'>
            <h6>UI/UX</h6>
          </div>
        </div>
        <div className='col-md-3 my-5' style={{ width: '200px' }}>
          <ProgressBar percentage={mobileAppPercentage} />
          <div className='pt-4'>
            <h6>Mobile App</h6>
          </div>
        </div>
        <div className='col-md-3 my-5' style={{ width: '200px' }}>
          <ProgressBar percentage={webDevelopmentPercentage} />
          <div className='pt-4'>
            <h6>Web Development</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsBlock
