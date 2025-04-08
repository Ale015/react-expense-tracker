import NavBar from './components/navBar'
import MainContent from './components/mainContent'
import './App.css'
import { useState , useEffect } from 'react';

import { useDashboard } from './hooks/useDashboard';
import { useTransactions } from './hooks/useTransactions';

function App() {

  const [filters, setFilters] = useState({ startDate: null, endDate: null, orderBy: "ASC" });
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const { transactions } = useTransactions(appliedFilters);
  const { dashboard } = useDashboard(appliedFilters)

  return (
    <div className='AppContainer'>
      <div className='titleLineCont'>
        <h1 className="title"> 🎍 Expense Tracker</h1>
      </div>
      <NavBar filters={filters} setFilters={setFilters} onSearch={setAppliedFilters}/>
      <MainContent transactions={transactions} dashboard={dashboard}/>
    </div>
  )
}

export default App
