import React from 'react'
import './cardTransaction.css'

function CardTransaction({t_title, t_amount, t_date, classType}) {
    
    const dateObject = new Date(t_date)
    const formatter = new Intl.DateTimeFormat("pt-BR", {year:"2-digit", month: "2-digit", day:"2-digit"})
    const formattedDate = formatter.format(dateObject)
  
    return (
    <div id='cardTransactionCont' className={`${classType}`}>
            <h4 className='titleTransaction'>{t_title}</h4>
        <div id='lineMain'>
            <div className='amountLine'>
                <p className='ra'>R$</p><p className='amount'>{t_amount}</p>
            </div>
            <p className='date'>{formattedDate}</p>
        </div>
    </div>
  )
}

export default CardTransaction
