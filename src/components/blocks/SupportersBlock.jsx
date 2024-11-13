import React from 'react'
import { ImageCard } from '../elements'
import maleWorker from '../../images/maleWorker.jpg'
import tweezers from '../../images/tweezers.jpg'
import workingPair from '../../images/workingPair.jpg'
import confusedMan from '../../images/confusedMan.jpg'

const SupportersBlock = () => {
  return (
    <div>
      <div className='p-5'>
        <br />
        <br />
        <br />
        <h2 className='text-capitalize'>
          <b>What we Offer to our Supporters</b>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className='row p-5'>
        <div className='col-sm-3 pb-5'>
          <ImageCard imageUrl={maleWorker}></ImageCard>
        </div>
        <div className='col-sm-3 pb-5'>
          <ImageCard imageUrl={tweezers}></ImageCard>
        </div>
        <div className='col-sm-3 pb-5'>
          <ImageCard imageUrl={workingPair}></ImageCard>
        </div>
        <div className='col-sm-3 pb-5'>
          <ImageCard imageUrl={confusedMan}></ImageCard>
        </div>
      </div>
    </div>
  )
}

export default SupportersBlock
