import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

import './pieChartDashboard.css'

const COLORS = ['#74C27F', '#D64C3A'];

export function PieChartDashboard({totalIncomes, totalExpenses}){

    const data = [{name: 'Receitas', value: totalIncomes},{name:'Despesas', value: totalExpenses}]

    console.log("Incomes:", totalIncomes, "Expenses:", totalExpenses);


    return (
        <PieChart width={300} height={300} className="PieChartBox">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          stroke="#none"
          outerRadius={93}
          dataKey="value"
          label={({ name, percent }) =>
            `${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart> 
    )
}