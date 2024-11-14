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
      <div className='d-flex justify-content-evenly my-5'>
        <div className='col-sm-3'>
          <ProgressBar percentage={webDesignPercentage} name={'Web Design'} />
        </div>
        <div className='col-sm-3'>
          <ProgressBar percentage={uiPercentage} name={'UI/UX'} />
        </div>
        <div className='col-sm-3'>
          <ProgressBar percentage={mobileAppPercentage} name={'Mobile App'} />
        </div>
        <div className='col-sm-3'>
          <ProgressBar percentage={webDevelopmentPercentage} name={'Web Development'} />
        </div>
      </div>
    </div>
  )
}

export default QuestionsBlock
