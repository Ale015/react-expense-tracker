import React from 'react';
import './navBar.css';

import { ArrowDown01, ArrowUp10 , Plus, Search } from 'lucide-react';


function NavBar({ filters, setFilters, onSearch }) {
    const formatDate = (date) => (date ? new Date(date).toISOString().split("T")[0] : "");

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const handleOrderByToggle = () => {
        // Atualiza o estado primeiro e só depois chama a busca
        setFilters((prev) => {
            const newFilters = {
                ...prev,
                orderBy: prev.orderBy === "ASC" ? "DESC" : "ASC",
            };
            onSearch(newFilters); // Agora passa os valores atualizados
            return newFilters;
        });
    };
    
    return (
        <div className="navBarCont">
            <button  className='inputs-navBar' onClick={handleOrderByToggle}>
                {filters.orderBy === "ASC" ? <ArrowDown01/> : <ArrowUp10/>}
            </button>

            <input className='inputs-navBar' 
                type="date"
                value={formatDate(filters.startDate)}
                onChange={(e) => handleFilterChange("startDate", e.target.value)}
            />

            <input className='inputs-navBar' 
                type="date"
                value={formatDate(filters.endDate)}
                onChange={(e) => handleFilterChange("endDate", e.target.value)}
            />

            <button className='inputs-navBar' onClick={() => onSearch({...filters})}><Search className='searchButton' size={20}/></button>

            <button id='addButton' className="inputs-navBar"> <Plus className='plusButton' size={24}/></button>
        </div>
    );
}

export default NavBar;
