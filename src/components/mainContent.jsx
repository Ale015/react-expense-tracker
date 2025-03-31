import React from 'react'
import TransactionsContainer from './transactionsContainer'
import './mainContent.css'
import ResumeContainer from './resumeContainer'

function MainContent(){

    return (
        <div className="mainContentCont">
            <TransactionsContainer/>
            <ResumeContainer/>
        </div>
    )
}

export default MainContent