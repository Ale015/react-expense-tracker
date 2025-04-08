import React from 'react'
import TransactionsContainer from './transactionsContainer'
import './mainContent.css'
import ResumeContainer from './resumeContainer'

function MainContent({transactions, dashboard}){

    return (
        <div className="mainContentCont">
            <TransactionsContainer transactions={transactions}/>
            <ResumeContainer dashboard={dashboard}/>
        </div>
    )
}

export default MainContent