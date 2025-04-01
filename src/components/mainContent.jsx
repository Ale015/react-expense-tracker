import React from 'react'
import TransactionsContainer from './transactionsContainer'
import './mainContent.css'
import ResumeContainer from './resumeContainer'

function MainContent({transactions}){

    return (
        <div className="mainContentCont">
            <TransactionsContainer transactions={transactions}/>
            <ResumeContainer/>
        </div>
    )
}

export default MainContent