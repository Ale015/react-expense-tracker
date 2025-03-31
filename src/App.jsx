import NavBar from './components/navBar'
import MainContent from './components/mainContent'
import './App.css'
import { useState , useEffect } from 'react';

import { useTransactions } from './hooks/useTransactions';

function App() {

  const [filters, setFilters] = useState({ startDate: null, endDate: null, orderBy: "ASC" });
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const { transactions } = useTransactions(appliedFilters);


  return (
    <div className='AppContainer'>
      <div className='titleLineCont'>
        <h1 className="title"> 🎍 Expense Tracker</h1>
      </div>
      <NavBar filters={filters} setFilters={setFilters} onSearch={setAppliedFilters}/>


      <MainContent/>
      <div>

      <ul>
        {transactions.length === 0 ? (
          <p>Nenhuma transação encontrada</p>
        ) : (
          transactions.map((t) => (
            <li key={t.id}>
              {t.title} - R$ {t.amount} - {t.date}
            </li>
          ))
        )}
      </ul>
      </div>
    </div>
  )
}

export default App
