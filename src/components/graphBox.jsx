import React from 'react'

import { PieChartDashboard } from './PieChartDashboard'
import './graphBox.css'
import NullGraphBox from './nullGraphBox'

function GraphBox({dashboard}) {
  return (
    <div className='graphCont'>
        <h3>Visualização Gráfica</h3>

        { dashboard.totalIncomes === 0 && dashboard.totalExpenses === 0 ? <NullGraphBox/>: <PieChartDashboard 
        totalIncomes={dashboard.totalIncomes} 
        totalExpenses={dashboard.totalExpenses}
      />}
        
    </div>
  )
}

export default GraphBox