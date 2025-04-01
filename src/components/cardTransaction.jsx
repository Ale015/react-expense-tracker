import React from 'react'
import './cardTransaction.css'

function CardTransaction({t_title, t_amount, t_date}) {
    
    const dateObject = new Date(t_date)
    const formatter = new Intl.DateTimeFormat("pt-BR", {year:"2-digit", month: "2-digit", day:"2-digit"})
    const formattedDate = formatter.format(dateObject)
  
    return (
    <div id='cardTransactionCont'>
        <div id='lineMain'>
            <p>{t_title}</p>
            <p>{t_amount}</p>
        </div>
        <p>{formattedDate}</p>
    </div>
  )
}

export default CardTransaction


// 2025-03-2700:00:00.000Z