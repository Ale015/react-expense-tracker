import React from 'react'
import TransactionsContainer from './transactionsContainer'
import './mainContent.css'
import ResumeContainer from './resumeContainer'

function MainContent({transactions, dashboard, onDeleteTransaction }){

    return (
        <div className="mainContentCont">
            <TransactionsContainer transactions={transactions} onDeleteTransaction={onDeleteTransaction}/>
            <ResumeContainer dashboard={dashboard}/>
        </div>
    )
}

export default MainContent