import React from 'react'
import './valuesDashboard.css'
import ValuesTotal from './valuesTotal'

function ValuesDashboard({dashboard}) {


  return (
    <>
      <h3 className='resumeTitle'>Resumo Financeiro</h3>
    <div className='valuesDashboard'>
        <ValuesTotal title ={"Total"} type={"total"} colorClass="blueTotal" dashboard={dashboard}/>
        <ValuesTotal title ={"Receitas"} type={"totalIncomes"} colorClass="greenTotal" dashboard={dashboard}/>
        <ValuesTotal title ={"Despesas"} type={"totalExpenses"} colorClass="redTotal" dashboard={dashboard}/>
    </div>
    </>
  )
}

export default ValuesDashboard