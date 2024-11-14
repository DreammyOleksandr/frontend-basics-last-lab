import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressBar = ({ percentage, name }) => {
  return (
    <div className='d-flex flex-column'>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={3}
          styles={buildStyles({
            pathColor: 'darkorchid',
            textColor: 'black',
          })}
        />
      </div>
      <div className='pt-4 me-auto'>
        <h6>{name}</h6>
      </div>
    </div>
  )
}

export default ProgressBar
