import React from 'react'
import './valuesTotal.css'


function ValuesTotal({title, type, colorClass, dashboard}) {

  return (
    <div id='totalCont' className={`${colorClass}`}>
      <p className="totalTitle">
        {title} 
      </p>
        
      <div className="valueBox">

        <p className='moneySign'>
          R$
        </p>
        <p className='valueTotal'>
          {dashboard[type]?.toFixed(2)}
        </p>
      </div>

    </div>
  )
}

export default ValuesTotal