import React from 'react'
import './transactionsContainer.css'
import TypeContainer from './typeContainer'

function TransactionsContainer({transactions, onDeleteTransaction}) {

  let arrIncomes = []
  let arrExpenses = []

  for (let i = 0; i < transactions.length; i++) {
    const element = transactions[i];

    if(element.type === 'income'){
      arrIncomes.push(element)
    } else if (element.type === 'expense'){
      arrExpenses.push(element)
    }
  }
  
  
  return (
    <div className='transactionsCont'> 
      <TypeContainer title="Receitas" classType="greenIncomes" transactions={arrIncomes} onDeleteTransaction={onDeleteTransaction}/>
      <TypeContainer title="Despesas" classType="redExpenses" transactions={arrExpenses} onDeleteTransaction={onDeleteTransaction}/>  
    </div>
  )
}

export default TransactionsContainer