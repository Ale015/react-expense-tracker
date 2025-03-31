import React from 'react'
import GraphBox from './graphBox'
import ValuesDashboard from './valuesDashboard'

import './resumeContainer.css'

function ResumeContainer() {
  return (
    <div className='resumeCont'>
        <GraphBox/>
        <ValuesDashboard/>
    </div>
  )
}

export default ResumeContainer