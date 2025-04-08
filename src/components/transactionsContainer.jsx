import React from 'react'
import './transactionsContainer.css'
import TypeContainer from './typeContainer'

function TransactionsContainer({transactions}) {

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
      <TypeContainer title="Receitas" classType="greenIncomes" transactions={arrIncomes}/>
      <TypeContainer title="Despesas" classType="redExpenses" transactions={arrExpenses}/>  
    </div>
  )
}

export default TransactionsContainer