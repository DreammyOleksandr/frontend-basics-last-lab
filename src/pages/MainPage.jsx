import React from 'react'
import {
  GetStartedBlock,
  SupportersBlock,
  FixTechBlock,
  DiscountBlock,
  WorkingProcessBlock,
} from '../components/blocks'

const MainPage = () => {
  return (
    <div>
      <GetStartedBlock />
      <SupportersBlock />
      <FixTechBlock />
      <DiscountBlock />
      <WorkingProcessBlock />
    </div>
  )
}

export default MainPage
