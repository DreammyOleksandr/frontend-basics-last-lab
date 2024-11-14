import React from 'react'
import {
  GetStartedBlock,
  SupportersBlock,
  FixTechBlock,
  DiscountBlock,
  WorkingProcessBlock,
  QuestionsBlock,
} from '../components/blocks'

const MainPage = () => {
  return (
    <div>
      <GetStartedBlock />
      <SupportersBlock />
      <FixTechBlock />
      <DiscountBlock />
      <WorkingProcessBlock />
      <QuestionsBlock />
    </div>
  )
}

export default MainPage
