import React from 'react'
import {
  GetStartedBlock,
  SupportersBlock,
  FixTechBlock,
  DiscountBlock,
  WorkingProcessBlock,
  QuestionsBlock,
  FeedbackBlock,
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
      <FeedbackBlock />
    </div>
  )
}

export default MainPage
