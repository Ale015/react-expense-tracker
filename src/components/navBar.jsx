import React from 'react';
import './navBar.css';

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
            <button onClick={handleOrderByToggle}>
                {filters.orderBy === "ASC" ? "⬆️ Mais antigos" : "⬇️ Mais recentes"}
            </button>

            <input
                type="date"
                value={formatDate(filters.startDate)}
                onChange={(e) => handleFilterChange("startDate", e.target.value)}
            />

            <input
                type="date"
                value={formatDate(filters.endDate)}
                onChange={(e) => handleFilterChange("endDate", e.target.value)}
            />

            <button onClick={() => onSearch(filters)}>Search</button>
        </div>
    );
}

export default NavBar;
