import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressBar = ({ percentage }) => {
  return (
    <div>
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
    </div>
  )
}

export default ProgressBar
