import React from 'react'
import GraphBox from './graphBox'
import ValuesDashboard from './valuesDashboard'

import './resumeContainer.css'

function ResumeContainer({ dashboard }) {
  return (
    <div className='resumeCont'>
        <ValuesDashboard dashboard={dashboard}/>
        <GraphBox dashboard={dashboard}/>
    </div>
  )
}

export default ResumeContainer